"use client";
import JobBotXForm from '@/components/JobBotXForm';
import AuthProtectedSection from '@/components/AuthProtectedContent';
import Navbar from '@/components/Navbar';

export default function JobFormPage() {
  return (
    <>
      <Navbar />
      <AuthProtectedSection requireAuth={true}>
        <JobBotXForm />
      </AuthProtectedSection>
    </>
  );
}
