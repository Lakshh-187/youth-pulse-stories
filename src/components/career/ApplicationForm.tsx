
import React from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useForm } from 'react-hook-form';

const ApplicationForm = ({ job, onClose }) => {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Show success message
    toast({
      title: "Application Submitted!",
      description: "Thank you! We'll get back to you within 48 hours.",
    });
    
    // Close the modal after submission
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h3 className="font-semibold text-lg mb-4">Apply for {job.title}</h3>
      
      <div className="space-y-2">
        <Label htmlFor="fullName">Full Name</Label>
        <Input 
          id="fullName"
          placeholder="John Doe"
          {...register("fullName", { 
            required: "Name is required" 
          })}
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm">{errors.fullName.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input 
          id="email"
          type="email"
          placeholder="john@example.com"
          {...register("email", { 
            required: "Email is required",
            pattern: { 
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="portfolio">Portfolio Link</Label>
        <Input 
          id="portfolio"
          placeholder="https://yourportfolio.com"
          {...register("portfolio", { 
            required: "Portfolio link is required",
            pattern: { 
              value: /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
              message: "Please enter a valid URL"
            }
          })}
        />
        {errors.portfolio && (
          <p className="text-red-500 text-sm">{errors.portfolio.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="resume">Resume (PDF, Max 5MB)</Label>
        <Input 
          id="resume"
          type="file" 
          accept=".pdf"
          {...register("resume", { 
            required: "Resume is required" 
          })}
        />
        {errors.resume && (
          <p className="text-red-500 text-sm">{errors.resume.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="coverLetter">Cover Letter / Message</Label>
        <Textarea 
          id="coverLetter"
          placeholder="Tell us why you'd be a great fit..."
          className="min-h-[120px]"
          {...register("coverLetter", { 
            required: "Cover letter is required" 
          })}
        />
        {errors.coverLetter && (
          <p className="text-red-500 text-sm">{errors.coverLetter.message}</p>
        )}
      </div>

      <div className="flex items-start space-x-2 pt-2">
        <Checkbox id="guidelines" />
        <Label htmlFor="guidelines" className="font-normal text-sm">
          I've read the guidelines to create a valid portfolio link
        </Label>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit Application'}
      </Button>
    </form>
  );
};

export default ApplicationForm;
