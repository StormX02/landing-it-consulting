'use client';
import { SECTION_IDS } from '@/constants';
import clsx from 'clsx';
import { Form, Formik, FormikHelpers } from 'formik';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { DateTimeField, FormField, SelectField } from './FormField';
import {
  PersonalForm,
  personalFormInitValue,
  personalFormSchema,
  TeamForm,
  teamFormInitValue,
  teamFormSchema,
} from './Schema';

const Registration = () => {
  const t = useTranslations('HomePage');
  const [isLoading, setIsLoading] = React.useState(false);
  const [typeForm, setTypeForm] = React.useState<'team' | 'personal'>(
    'personal',
  );
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const toggleTypeForm = (type: 'team' | 'personal') => {
    setTypeForm(type);
  };

  const handleTeamSubmit = async (
    values: TeamForm,
    formikHelpers: FormikHelpers<TeamForm>,
  ) => {
    try {
      setIsLoading(true);
      const url =
        `https://docs.google.com/forms/d/e/1FAIpQLScxKAC9Ww4wevdbu82gMn9rM_FlTurlnYVIFpwQdiOGWPcMfg/formResponse?` +
        `entry.224019388=${encodeURIComponent(values.teamName)}&` +
        `entry.629332802=${encodeURIComponent(values.teamSize)}&` +
        `entry.255642493=${encodeURIComponent(values.school)}&` +
        `entry.1071420772=${encodeURIComponent(values.phoneNumber)}&` +
        `entry.1527414272=${encodeURIComponent(values.email)}&`;

      await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
      });

      setSubmitSuccess(true);
      toast.success(t('registration.success.toastMessage'));
      formikHelpers.resetForm();
    } catch (error) {
      toast.error(t('registration.failed.toastMessage'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (
    values: PersonalForm,
    formikHelpers: FormikHelpers<PersonalForm>,
  ) => {
    try {
      setIsLoading(true);

      const url =
        `https://docs.google.com/forms/d/e/1FAIpQLSea32a8wFT9NJl8Tjpq_UbsuaEzd9W3JN482qH06Q_rG7wTZw/formResponse?` +
        `entry.2104713088=${encodeURIComponent(values.fullName)}&` +
        `entry.1209528409=${encodeURIComponent(values.dateOfBirth)}&` +
        `entry.1701909681=${encodeURIComponent(values.school)}&` +
        `entry.480658283=${encodeURIComponent(values.major)}&` +
        `entry.350657595=${encodeURIComponent(values.phoneNumber)}&` +
        `entry.489003859=${encodeURIComponent(values.email)}`;
      await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
      });

      setSubmitSuccess(true);
      toast.success(t('registration.success.toastMessage'));
      formikHelpers.resetForm();
    } catch (error) {
      console.log(error);
      toast.error(t('registration.failed.toastMessage'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='container' id={SECTION_IDS.REGISTER}>
      <h2 className='text-center text-2xl font-extrabold uppercase text-primary'>
        Registration
      </h2>

      {submitSuccess ? (
        <div className='card-gradient-border mx-auto mt-10 flex w-full flex-col items-center justify-center gap-y-6 p-10 sm:w-3/4'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.5, bounce: 0.5, delay: 0.4 },
            }}
            viewport={{ once: true }}
          >
            <Check className='h-16 w-16 rounded-full bg-primary p-2' />
          </motion.div>
          <motion.div
            className='text-center'
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.5, bounce: 0.5, delay: 0.2 },
            }}
            viewport={{ once: true }}
          >
            <p className='text-base font-bold min-[400px]:text-lg'>
              {t('registration.success.title')}
            </p>
            <p className='text-base font-bold min-[400px]:text-lg'>
              {t('registration.success.content')}
            </p>
          </motion.div>
        </div>
      ) : typeForm === 'personal' ? (
        <Formik
          enableReinitialize
          initialValues={personalFormInitValue}
          validationSchema={personalFormSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className='card-gradient-border mx-auto mt-10 grid w-full grid-cols-2 gap-4 p-10 sm:w-3/4'>
              <div className='col-span-2 grid w-full grid-cols-2 gap-y-6 text-center text-3xl font-bold'>
                <button
                  onClick={() => toggleTypeForm('personal')}
                  className={clsx(
                    'border-b-4 border-white pb-4 text-base uppercase transition-all sm:text-lg',
                    typeForm === 'personal' && '!border-[#FFB84E] text-primary',
                  )}
                  type='button'
                >
                  {t('registration.individual.title')}
                </button>
                <button
                  onClick={() => toggleTypeForm('team')}
                  className={clsx(
                    'border-b-4 border-white pb-4 text-base uppercase transition-all sm:text-lg',
                  )}
                  type='button'
                >
                  {t('registration.team.title')}
                </button>
              </div>

              <div className='col-span-2'>
                <FormField
                  label={t('registration.individual.fullName.label')}
                  name='fullName'
                  required
                />
              </div>
              <div className='col-span-2 md:col-span-1'>
                <DateTimeField
                  name='dateOfBirth'
                  label={t('registration.individual.dateOfBirth.label')}
                  required
                />
              </div>
              <div className='col-span-2 md:col-span-1'>
                <SelectField
                  label={t('registration.individual.gender.label')}
                  name='gender'
                  required
                  options={[
                    {
                      value: 'male',
                      label: t('registration.individual.gender.male'),
                    },
                    {
                      value: 'female',
                      label: t('registration.individual.gender.female'),
                    },
                  ]}
                />
              </div>
              <div className='col-span-2 md:col-span-1'>
                <FormField
                  label={t('registration.individual.school.label')}
                  name='school'
                  required
                />
              </div>
              <div className='col-span-2 md:col-span-1'>
                <FormField
                  label={t('registration.individual.major.label')}
                  name='major'
                  required
                />
              </div>
              <div className='col-span-2'>
                <FormField
                  label={t('registration.individual.phoneNumber.label')}
                  name='phoneNumber'
                  required
                />
              </div>
              <div className='col-span-2'>
                <FormField
                  label={t('registration.individual.email.label')}
                  name='email'
                  required
                />
              </div>

              <div className='col-span-2 mt-4 flex justify-end'>
                <button
                  disabled={isLoading}
                  type='submit'
                  className={clsx(
                    'flex items-center justify-center rounded-lg bg-[#7FFFF7] px-6 py-2 font-bold text-black hover:opacity-90',
                    isLoading && 'cursor-not-allowed opacity-90',
                  )}
                >
                  {isLoading ? (
                    <FaSpinner className='animate-spin' />
                  ) : (
                    t('registration.submit')
                  )}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      ) : (
        <Formik
          enableReinitialize
          initialValues={teamFormInitValue}
          validationSchema={teamFormSchema}
          onSubmit={handleTeamSubmit}
        >
          {() => (
            <Form className='card-gradient-border mx-auto mt-10 grid w-full grid-cols-2 gap-4 p-10 sm:w-3/4'>
              <div className='col-span-2 grid w-full grid-cols-2 gap-y-6 text-center text-3xl font-bold'>
                <button
                  onClick={() => toggleTypeForm('personal')}
                  className={clsx(
                    'border-b-4 border-white pb-4 text-base uppercase transition-all sm:text-lg',
                  )}
                  type='button'
                >
                  {t('registration.individual.title')}
                </button>
                <button
                  onClick={() => toggleTypeForm('team')}
                  className={clsx(
                    'border-b-4 border-white pb-4 text-base uppercase transition-all sm:text-lg',
                    typeForm === 'team' && '!border-[#FFB84E] text-primary',
                  )}
                  type='button'
                >
                  {t('registration.team.title')}
                </button>
              </div>
              <div className='col-span-2'>
                <FormField
                  label={t('registration.team.teamName.label')}
                  name='teamName'
                  required
                />
              </div>
              <div className='col-span-2'>
                <FormField
                  label={t('registration.team.teamSize.label')}
                  name='teamSize'
                  required
                />
              </div>
              <div className='col-span-2'>
                <FormField
                  label={t('registration.team.school.label')}
                  name='school'
                  required
                />
              </div>
              <div className='col-span-2'>
                <FormField
                  label={t('registration.team.phoneNumber.label')}
                  name='phoneNumber'
                  required
                />
              </div>
              <div className='col-span-2'>
                <FormField
                  label={t('registration.team.email.label')}
                  name='email'
                  required
                />
              </div>
              <div className='col-span-2 mt-4 flex justify-end'>
                <button
                  type='submit'
                  disabled={isLoading}
                  className={clsx(
                    'flex items-center justify-center rounded-lg bg-[#7FFFF7] px-6 py-2 font-bold text-black hover:opacity-90',
                    isLoading && 'cursor-not-allowed opacity-90',
                  )}
                >
                  {isLoading ? (
                    <FaSpinner className='animate-spin' />
                  ) : (
                    t('registration.submit')
                  )}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default Registration;
