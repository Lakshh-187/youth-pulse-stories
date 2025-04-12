
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileText, Globe, GraduationCap, Award, Search, Grid2X2, List, Table2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

// Sample opportunity data - in a real scenario, this would come from an API or database
const opportunitiesData = [{
  id: 1,
  title: "Google for Startups",
  category: "Bootcamp",
  link: "https://startup.google.com/"
},
{
  id: 2,
  title: "Microsoft for Startups Founders Hub",
  category: "Bootcamp",
  link: "https://startups.microsoft.com/en-us/"
},
{
  id: 3,
  title: "AWS Activate Program",
  category: "Bootcamp",
  link: "https://aws.amazon.com/activate/"
},
{
  id: 4,
  title: "Meta Startup Hub",
  category: "Internship",
  link: "https://www.facebook.com/business/startups"
},
{
  id: 5,
  title: "Intel Startup Program",
  category: "Research",
  link: "https://www.intel.com/content/www/us/en/startups/overview.html"
},
{
  id: 6,
  title: "IBM Global Entrepreneur",
  category: "Internship",
  link: "https://www.ibm.com/partnerworld/startups"
},
{
  id: 7,
  title: "Apple Entrepreneur Camp",
  category: "Workshop",
  link: "https://developer.apple.com/entrepreneur-camp/"
},
{
  id: 8,
  title: "Cisco LaunchPad",
  category: "Bootcamp",
  link: "https://launchpad.cisco.com/"
},
{
  id: 9,
  title: "SAP Startup Focus",
  category: "Research",
  link: "https://www.sap.com/india/partner/partner-with-sap/startups.html"
},
{
  id: 10,
  title: "Oracle for Startups",
  category: "Internship",
  link: "https://www.oracle.com/startup/"
},
{
  id: 11,
  title: "Adobe Digital Entrepreneurship Program",
  category: "Workshop",
  link: "https://www.adobe.com/creativecloud/business/teams/entrepreneurship.html"
},
{
  id: 12,
  title: "LinkedIn Creator Accelerator",
  category: "Scholarship",
  link: "https://creators.linkedin.com/accelerator"
},
{
  id: 13,
  title: "HubSpot for Startups",
  category: "Bootcamp",
  link: "https://www.hubspot.com/startups"
},
{
  id: 14,
  title: "Tesla Start Program",
  category: "Internship",
  link: "https://www.tesla.com/careers/tesla-start"
},
{
  id: 15,
  title: "SpaceX Starbase Internship",
  category: "Internship",
  link: "https://www.spacex.com/careers/university/"
},
{
  id: 16,
  title: "NASA Startup Support",
  category: "Research",
  link: "https://www.nasa.gov/directorates/somd/small-business-programs/"
},
{
  id: 17,
  title: "MIT LaunchX",
  category: "Exchange",
  link: "https://www.launchx.com/"
},
{
  id: 18,
  title: "Techstars Startup Weekend",
  category: "Workshop",
  link: "https://www.techstars.com/startup-weekend"
},
{
  id: 19,
  title: "Harvard Innovation Labs",
  category: "Research",
  link: "https://innovationlabs.harvard.edu/"

},
{
  id: 21,
  title: "UNICEF Internship Program",
  category: "Internship",
  link: "https://www.unicef.org/careers/internships"
},
{
  id: 22,
  title: "OECD Internship Program",
  category: "Internship",
  link: "https://www.oecd.org/careers/internship-programme/"
},
{
  id: 23,
  title: "Schwarzman Scholars Program",
  category: "Scholarship",
  link: "https://www.schwarzmanscholars.org/"
},
{
  id: 24,
  title: "World Bank Internship Program",
  category: "Internship",
  link: "https://www.worldbank.org/en/about/careers/programs-and-internships"
},
{
  id: 25,
  title: "IMF Internship Program",
  category: "Internship",
  link: "https://www.imf.org/en/About/Recruitment/Internships"
},
{
  id: 26,
  title: "DAAD RISE Germany Internship",
  category: "Research",
  link: "https://www.daad.de/rise/en/"
},
{
  id: 27,
  title: "AAUW International Fellowships",
  category: "Scholarship",
  link: "https://www.aauw.org/resources/programs/fellowships-grants/current-opportunities/international/"
},
{
  id: 28,
  title: "ESA Internship Program",
  category: "Internship",
  link: "https://jobs.esa.int/"
},
{
  id: 29,
  title: "Asia Foundation Development Fellowship",
  category: "Fellowship",
  link: "https://asiafoundation.org/what-we-do/asia-foundation-development-fellows/"
},
{
  id: 30,
  title: "Facebook University Internship",
  category: "Internship",
  link: "https://www.metacareers.com/students-and-grads"
},
{
  id: 31,
  title: "Tesla Internship Program",
  category: "Internship",
  link: "https://www.tesla.com/careers/search/?category=internship"
},
{
  id: 32,
  title: "Apple Internships",
  category: "Internship",
  link: "https://www.apple.com/careers/internship/"
},
{
  id: 33,
  title: "Microsoft Internship Program",
  category: "Internship",
  link: "https://careers.microsoft.com/students/us/en"
},
{
  id: 34,
  title: "Google STEP Internship",
  category: "Internship",
  link: "https://buildyourfuture.withgoogle.com/programs/step/"
},
{
  id: 35,
  title: "Amazon Future Engineer Internship",
  category: "Internship",
  link: "https://www.amazonfutureengineer.com/"
},
{
  id: 36,
  title: "McKinsey Fellowships",
  category: "Internship",
  link: "https://www.mckinsey.com/careers/students/global-internship-programs"
},
{
  id: 37,
  title: "NASA Pathways Internship",
  category: "Internship",
  link: "https://intern.nasa.gov/"
},
{
  id: 38,
  title: "WHO Internship Program",
  category: "Internship",
  link: "https://www.who.int/careers/internship-programme"
},
{
  id: 39,
  title: "Goldman Sachs Summer Analyst Program",
  category: "Internship",
  link: "https://www.goldmansachs.com/careers/students/"
},
{
  id: 40,
  title: "Imagine Cup by Microsoft",
  category: "Competition",
  link: "https://imaginecup.microsoft.com/"
},
{
  id: 41,
  title: "NASA Space Apps Challenge",
  category: "Competition",
  link: "https://www.spaceappschallenge.org/"
},
{
  id: 42,
  title: "Alibaba GET Global Challenge",
  category: "Competition",
  link: "https://get.alibaba.com/"
},
{
  id: 43,
  title: "TiE University Challenge",
  category: "Competition",
  link: "https://www.tieuniversity.org/"
},
{
  id: 44,
  title: "Go Green Challenge by Schneider Electric",
  category: "Competition",
  link: "https://www.se.com/ww/en/work/campaign/innovation/go-green/"
},
{
  id: 45,
  title: "Google Code Jam",
  category: "Competition",
  link: "https://codingcompetitions.withgoogle.com/codejam"
},
{
  id: 46,
  title: "UN Global Youth Video Competition",
  category: "Competition",
  link: "https://unfccc.int/topics/education-youth/youth/un-global-youth-video-competition"
},
{
  id: 47,
  title: "HackMIT",
  category: "Competition",
  link: "https://hackmit.org/"
},
{
  id: 48,
  title: "World Robot Olympiad",
  category: "Competition",
  link: "https://www.wro-association.org/"
},
{
  id: 49,
  title: "Cyber Security Challenge UK",
  category: "Competition",
  link: "https://www.cybersecuritychallenge.org.uk/"
},
{
  id: 50,
  title: "Coursera for Campus",
  category: "Learning",
  link: "https://www.coursera.org/campus/"
},
{
  id: 51,
  title: "MIT OpenCourseWare (OCW)",
  category: "Learning",
  link: "https://ocw.mit.edu/"
},
{
  id: 52,
  title: "Harvard Online Courses",
  category: "Learning",
  link: "https://online-learning.harvard.edu/"
},
{
  id: 53,
  title: "Khan Academy",
  category: "Learning",
  link: "https://www.khanacademy.org/"
},
{
  id: 54,
  title: "Udacity Scholarships",
  category: "Scholarship",
  link: "https://www.udacity.com/scholarships"
},
{
  id: 55,
  title: "edX for Students",
  category: "Learning",
  link: "https://www.edx.org/"
},
{
  id: 56,
  title: "Google Digital Garage",
  category: "Learning",
  link: "https://grow.google/intl/en_in/"
},
{
  id: 57,
  title: "IBM SkillsBuild",
  category: "Learning",
  link: "https://skillsbuild.org/students"
},
{
  id: 58,
  title: "Microsoft Learn for Students",
  category: "Learning",
  link: "https://learn.microsoft.com/en-us/training/students/"
},
{
  id: 59,
  title: "LinkedIn Learning for Students",
  category: "Learning",
  link: "https://www.linkedin.com/learning/"
},
{
  id: 60,
  title: "Elon Musk Foundation Grants",
  category: "Grant",
  link: "https://www.muskfoundation.org/"
},
{
  id: 61,
  title: "Coca-Cola Scholars Program",
  category: "Scholarship",
  link: "https://www.coca-colascholarsfoundation.org/"
},
{
  id: 62,
  title: "TechWomen Fellowship",
  category: "Scholarship",
  link: "https://www.techwomen.org/"
},
{
  id: 63,
  title: "Yale Young Global Scholars (YYGS)",
  category: "Scholarship",
  link: "https://globalscholars.yale.edu/"
},
{
  id: 64,
  title: "Knight-Hennessy Scholars Program",
  category: "Scholarship",
  link: "https://knight-hennessy.stanford.edu/"
},
{
  id: 65,
  title: "Generation Google Scholarship",
  category: "Scholarship",
  link: "https://buildyourfuture.withgoogle.com/scholarships"
},
{
  id: 66,
  title: "WE Empower UN SDG Challenge",
  category: "Grant",
  link: "https://sustainability-innovation.asu.edu/we-empower/"
},
{
  id: 67,
  title: "Adobe Women in Tech Scholarship",
  category: "Scholarship",
  link: "https://research.adobe.com/scholarship/"
},
{
  id: 68,
  title: "Facebook AI Residency Program",
  category: "Research",
  link: "https://ai.facebook.com/blog/ai-residency-program/"
},
{
  id: 69,
  title: "Jacobs Foundation Research Fellowship",
  category: "Research",
  link: "https://jacobsfoundation.org/en/activity/jacobs-research-fellowship-program/"
},
{
  id: 70,
  title: "World Economic Forum Fellowships",
  category: "Fellowship",
  link: "https://www.weforum.org/agenda/2021/06/global-leadership-fellowships-wef/"
},
{
  id: 71,
  title: "The Clinton Foundation Internships",
  category: "Internship",
  link: "https://www.clintonfoundation.org/careers/internships/"
},
{
  id: 72,
  title: "Obama Foundation Scholars Program",
  category: "Scholarship",
  link: "https://www.obama.org/scholars/"
},
{
  id: 73,
  title: "Merck Research Internship",
  category: "Internship",
  link: "https://www.merckgroup.com/en/careers/students-graduates/internships.html"
},
{
  id: 74,
  title: "L’Oréal-UNESCO For Women in Science",
  category: "Scholarship",
  link: "https://www.forwomeninscience.com/"
},
{
  id: 75,
  title: "JP Morgan Global Finance Internship",
  category: "Internship",
  link: "https://careers.jpmorgan.com/global/en/students/programs"
},
{
  id: 76,
  title: "Ford Motor Company Global Internships",
  category: "Internship",
  link: "https://corporate.ford.com/careers/programs/internship.html"
},
{
  id: 77,
  title: "Pfizer Summer Internship Program",
  category: "Internship",
  link: "https://www.pfizer.com/about/careers/internships"
},
{
  id: 78,
  title: "European Union Traineeships (Blue Book)",
  category: "Internship",
  link: "https://traineeships.ec.europa.eu/"
},
{
  id: 79,
  title: "World Food Programme Internship",
  category: "Internship",
  link: "https://www.wfp.org/careers/internships"
},
{
  id: 80,
  title: "Cisco Global Problem Solver Challenge",
  category: "Competition",
  link: "https://www.cisco.com/c/en/us/about/csr/impact/global-problem-solver-challenge.html"
},
{
  id: 81,
  title: "European Youth Award (EYA)",
  category: "Competition",
  link: "https://www.eu-youthaward.org/"
},
{
  id: 82,
  title: "AI for Good Global Summit",
  category: "Competition",
  link: "https://aiforgood.itu.int/"
},
{
  id: 83,
  title: "Global Game Jam",
  category: "Competition",
  link: "https://globalgamejam.org/"
},
{
  id: 84,
  title: "Formula Student Competition",
  category: "Competition",
  link: "https://www.formulastudent.com/"
},
{
  id: 85,
  title: "IMPACT2030 Innovation Challenge",
  category: "Competition",
  link: "https://impact2030.com/"
},
{
  id: 86,
  title: "Climathon by EIT Climate-KIC",
  category: "Competition",
  link: "https://climathon.climate-kic.org/"
},
{
  id: 87,
  title: "Google Hash Code",
  category: "Competition",
  link: "https://codingcompetitions.withgoogle.com/hashcode"
},
{
  id: 88,
  title: "MIT $100K Entrepreneurship Competition",
  category: "Competition",
  link: "https://mit100k.org/"
},
{
  id: 89,
  title: "WorldSkills Competition",
  category: "Competition",
  link: "https://worldskills.org/"
},
{
  id: 90,
  title: "Google Skillshop",
  category: "Learning",
  link: "https://skillshop.withgoogle.com/"
},
{
  id: 91,
  title: "AWS Training & Certification",
  category: "Learning",
  link: "https://www.aws.training/"
},
{
  id: 92,
  title: "DataCamp for Students",
  category: "Learning",
  link: "https://www.datacamp.com/groups/students"
},
{
  id: 93,
  title: "Cisco Networking Academy",
  category: "Learning",
  link: "https://www.netacad.com/"
},
{
  id: 94,
  title: "HackerRank Skills Certification",
  category: "Learning",
  link: "https://www.hackerrank.com/skills-directory"
},
{
  id: 95,
  title: "OpenWHO",
  category: "Learning",
  link: "https://openwho.org/"
},
{
  id: 96,
  title: "WorldQuant University",
  category: "Learning",
  link: "https://www.wqu.edu/"
},
{
  id: 97,
  title: "Microsoft AI School",
  category: "Learning",
  link: "https://aischool.microsoft.com/home"
},
{
  id: 98,
  title: "Stanford Online",
  category: "Learning",
  link: "https://online.stanford.edu/"
},
{
  id: 99,
  title: "IBM Quantum Experience",
  category: "Learning",
  link: "https://quantum-computing.ibm.com/"
},
{
  id: 100,
  title: "Amgen Scholars Program",
  category: "Scholarship",
  link: "https://amgenscholars.com/"
},
{
  id: 111,
  title: "Rotary Peace Fellowship",
  category: "Fellowship",
  link: "https://www.rotary.org/en/our-programs/peace-fellowships"
},
{
  id: 112,
  title: "Open Society Fellowship",
  category: "Fellowship",
  link: "https://www.opensocietyfoundations.org/grants/open-society-fellowship"
},
{
  id: 113,
  title: "Opportunity Desk",
  category: "Learning",
  link: "https://opportunitydesk.org/"
},
{
  id: 114,
  title: "Scholarship Positions",
  category: "Learning",
  link: "https://www.scholarship-positions.com/"
},
{
  id: 115,
  title: "ProFellow",
  category: "Learning",
  link: "https://www.profellow.com/"
},
{
  id: 116,
  title: "GoAbroad",
  category: "Learning",
  link: "https://www.goabroad.com/"
},
{
  id: 117,
  title: "We Make Scholars",
  category: "Learning",
  link: "https://www.wemakescholars.com/"
},
{
  id: 118,
  title: "HelloIntern",
  category: "Internship",
  link: "https://www.hellointern.com/"
},
{
  id: 119,
  title: "Youth Opportunities",
  category: "Learning",
  link: "https://www.youthop.com/"
},
{
  id: 120,
  title: "OYA Opportunities",
  category: "Learning",
  link: "https://oyaop.com/"
},
{
  id: 121,
  title: "FindAMasters",
  category: "Scholarship",
  link: "https://www.findamasters.com/"
},
{
  id: 122,
  title: "Facebook Fellowship Program",
  category: "Research",
  link: "https://research.facebook.com/fellowship/"
},
{
  id: 123,
  title: "TechGirls Exchange Program",
  category: "Exchange",
  link: "https://techgirlsglobal.org/"
},
{
  id: 124,
  title: "Weidenfeld-Hoffmann Scholarships",
  category: "Scholarship",
  link: "https://www.sbs.ox.ac.uk/scholarships/weidenfeld-hoffmann-scholarship-and-leadership-programme"
},
{
  id: 125,
  title: "Australia Awards Scholarships",
  category: "Scholarship",
  link: "https://www.dfat.gov.au/people-to-people/australia-awards"
},
{
  id: 126,
  title: "MIT Solve Challenge",
  category: "Competition",
  link: "https://solve.mit.edu/challenges"
},
{
  id: 127,
  title: "The Earthshot Prize",
  category: "Grant",
  link: "https://earthshotprize.org/"
},
{
  id: 128,
  title: "Draper Competition for Collegiate Women Entrepreneurs",
  category: "Competition",
  link: "https://www.draperuniversity.com/womens-competition"
},
{
  id: 129,
  title: "Yunus & Youth Global Fellowship",
  category: "Fellowship",
  link: "https://yunusandyouth.com/"
},
{
  id: 130,
  title: "GoGettaz Agripreneur Prize",
  category: "Grant",
  link: "https://www.gogettaz.africa/"
},
{
  id: 131,
  title: "She Entrepreneurs Program",
  category: "Fellowship",
  link: "https://si.se/en/apply/she-entrepreneurs/"
},
{
  id: 132,
  title: "Orange Social Venture Prize",
  category: "Grant",
  link: "https://entrepreneurclub.orange.com/en/orange-social-venture-prize/"
},
{
  id: 133,
  title: "Global Student Entrepreneur Awards (GSEA)",
  category: "Competition",
  link: "https://gsea.org/"
},
{
  id: 134,
  title: "AfterSchoolAfrica",
  category: "Learning",
  link: "https://www.afterschoolafrica.com/"
},
{
  id: 135,
  title: "Opportunity for Youth",
  category: "Learning",
  link: "https://opportunity4youth.org/"
},
{
  id: 136,
  title: "Developing Career",
  category: "Learning",
  link: "https://www.developingcareer.com/"
},
{
  id: 137,
  title: "HeySuccess",
  category: "Learning",
  link: "https://www.heysuccess.com/"
},
{
  id: 138,
  title: "Campus Compact",
  category: "Fellowship",
  link: "https://compact.org/"
},
{
  id: 139,
  title: "FindAPhD",
  category: "Scholarship",
  link: "https://www.findaphd.com/"
},
{
  id: 140,
  title: "Breakthrough Junior Challenge",
  category: "Competition",
  link: "https://breakthroughjuniorchallenge.org/"
},
{
  id: 141,
  title: "Regeneron Science Talent Search",
  category: "Competition",
  link: "https://www.societyforscience.org/regeneron-sts/"
},
{
  id: 142,
  title: "Google Science Fair",
  category: "Competition",
  link: "https://www.googlesciencefair.com/"
},
{
  id: 143,
  title: "NASA Human Exploration Rover Challenge",
  category: "Competition",
  link: "https://www.nasa.gov/stem/roverchallenge/home/index.html"
},
{
  id: 144,
  title: "Intel International Science and Engineering Fair (ISEF)",
  category: "Competition",
  link: "https://www.societyforscience.org/isef/"
},
{
  id: 145,
  title: "XPRIZE Competitions",
  category: "Competition",
  link: "https://www.xprize.org/"
},
{
  id: 146,
  title: "National Geographic Slingshot Challenge",
  category: "Competition",
  link: "https://www.nationalgeographic.org/society/education-resources/slingshot-challenge/"
},
{
  id: 147,
  title: "Shell Eco-Marathon",
  category: "Competition",
  link: "https://www.shell.com/make-the-future/shell-ecomarathon.html"
},
{
  id: 148,
  title: "European Union Contest for Young Scientists (EUCYS)",
  category: "Competition",
  link: "https://eucys.eu/"
},
{
  id: 149,
  title: "Elon Musk Foundation Grants",
  category: "Grant",
  link: "https://www.muskfoundation.org/"
},
{
  id: 150,
  title: "WE Empower UN SDG Challenge",
  category: "Grant",
  link: "https://sustainability-innovation.asu.edu/we-empower/"
},
{
  id: 151,
  title: "Rise for the World",
  category: "Scholarship",
  link: "https://www.risefortheworld.org/"
},
{
  id: 152,
  title: "Rhodes Scholarship",
  category: "Scholarship",
  link: "https://www.rhodeshouse.ox.ac.uk/scholarships/"
},
{
  id: 153,
  title: "Chevening Scholarship",
  category: "Scholarship",
  link: "https://www.chevening.org/"
},
{
  id: 154,
  title: "Fulbright Program",
  category: "Scholarship",
  link: "https://foreign.fulbrightonline.org/"
},
{
  id: 155,
  title: "Commonwealth Shared Scholarship",
  category: "Scholarship",
  link: "https://cscuk.fcdo.gov.uk/scholarships/commonwealth-shared-scholarships/"
},
{
  id: 156,
  title: "Erasmus Mundus Joint Master Degrees",
  category: "Scholarship",
  link: "https://erasmus-plus.ec.europa.eu/"
},
{
  id: 157,
  title: "DAAD EPOS Scholarship",
  category: "Scholarship",
  link: "https://www.daad.de/en/study-and-research-in-germany/scholarships/"
},
{
  id: 158,
  title: "ADB-Japan Scholarship Program",
  category: "Scholarship",
  link: "https://www.adb.org/work-with-us/careers/japan-scholarship-program"
},
{
  id: 159,
  title: "AAUW International Fellowships",
  category: "Fellowship",
  link: "https://www.aauw.org/resources/programs/fellowships-grants/current-opportunities/international/"
},
{
  id: 160,
  title: "UNU Global Sustainability Fellowship",
  category: "Fellowship",
  link: "https://ias.unu.edu/en/research/fellowships"
},
{
  id: 161,
  title: "McDonald Fellowship for Neurology Research",
  category: "Fellowship",
  link: "https://www.msif.org/research/awards-grants-and-fellowships/mcdonald-fellowships/"
},
{
  id: 162,
  title: "Humboldt Research Fellowship for Postdocs",
  category: "Fellowship",
  link: "https://www.humboldt-foundation.de/en/apply/sponsorship-programmes/humboldt-research-fellowship"
},
{
  id: 163,
  title: "UNESCO Fellowship Programme",
  category: "Fellowship",
  link: "https://www.unesco.org/en/fellowships"
},
{
  id: 164,
  title: "OECD Young Associates Programme (YAP)",
  category: "Fellowship",
  link: "https://www.oecd.org/careers/young-associates-programme/"
},
{
  id: 165,
  title: "Yenching Academy Fellowship",
  category: "Fellowship",
  link: "https://yenchingacademy.pku.edu.cn/"
},
{
  id: 166,
  title: "UNU WIDER Visiting PhD Fellowship",
  category: "Fellowship",
  link: "https://www.wider.unu.edu/opportunity/visiting-phd-fellowship"
},
{
  id: 167,
  title: "ETH Zurich Excellence Scholarship",
  category: "Scholarship",
  link: "https://ethz.ch/en/studies/financial/scholarships/excellence-scholarship.html"
},
{
  id: 168,
  title: "Google Africa Developer Scholarship",
  category: "Scholarship",
  link: "https://africa.googledevelopers.community/africa-developer-scholarship/"
},
{
  id: 169,
  title: "Obama-Chesky Voyager Scholarship",
  category: "Scholarship",
  link: "https://www.thevoyagerscholarship.org/"
},
{
  id: 170,
  title: "World Bank Scholarship Program",
  category: "Scholarship",
  link: "https://www.worldbank.org/en/programs/scholarships"
},
{
  id: 171,
  title: "ThinkSwiss Research Scholarships",
  category: "Scholarship",
  link: "https://thinkswiss.org/"
},
{
  id: 172,
  title: "Eiffel Excellence Scholarship Program (France)",
  category: "Scholarship",
  link: "https://www.campusfrance.org/en/eiffel-scholarship-program-of-excellence"
},
{
  id: 173,
  title: "Swedish Institute Scholarships for Global Professionals",
  category: "Scholarship",
  link: "https://si.se/en/apply/scholarships/swedish-institute-scholarships-for-global-professionals/"
},
{
  id: 174,
  title: "Belgium Government Scholarships (ARES)",
  category: "Scholarship",
  link: "https://www.ares-ac.be/en/cooperation-au-developpement/scholarships"
},
{
  id: 175,
  title: "Hungarian Government Scholarships (Stipendium Hungaricum)",
  category: "Scholarship",
  link: "https://stipendiumhungaricum.hu/"
},
{
  id: 176,
  title: "Taiwan International Graduate Program (TIGP)",
  category: "Scholarship",
  link: "https://tigp.sinica.edu.tw/"
},
{
  id: 177,
  title: "Korean Government Scholarship Program (KGSP)",
  category: "Scholarship",
  link: "https://www.studyinkorea.go.kr/"
},
{
  id: 178,
  title: "Russian Government Scholarships",
  category: "Scholarship",
  link: "https://education-in-russia.com/"
},
{
  id: 179,
  title: "Japanese Government (MEXT) Scholarship",
  category: "Scholarship",
  link: "https://www.studyinjapan.go.jp/en/smap-stopj-applications-scholarships/"
},
{
  id: 180,
  title: "Chinese Government Scholarship",
  category: "Scholarship",
  link: "https://www.campuschina.org/"
},

];

// Extract unique values for categories
const uniqueCategories = [...new Set(opportunitiesData.map(opp => opp.category))];

const SEP700 = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'table'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter opportunities based on selected filters
  const filteredOpportunities = opportunitiesData.filter(opportunity => {
    const matchesSearch = searchTerm === '' ||
      opportunity.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === null || opportunity.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredOpportunities.length / itemsPerPage);
  const paginatedOpportunities = filteredOpportunities.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Generate page numbers for pagination
  const pageNumbers = [];
  const maxVisiblePages = 5;
  
  if (totalPages <= maxVisiblePages) {
    // Show all pages if total pages are less than or equal to max visible pages
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    // Always show first and last pages
    if (currentPage <= 3) {
      // If current page is near the beginning
      for (let i = 1; i <= 4; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push('ellipsis');
      pageNumbers.push(totalPages);
    } else if (currentPage >= totalPages - 2) {
      // If current page is near the end
      pageNumbers.push(1);
      pageNumbers.push('ellipsis');
      for (let i = totalPages - 3; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // If current page is in the middle
      pageNumbers.push(1);
      pageNumbers.push('ellipsis');
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push('ellipsis');
      pageNumbers.push(totalPages);
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-3 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <GraduationCap className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Scholar Empowerment Program - 700</h1>
            <p className="text-xl opacity-90 mb-8">Discover over 700 opportunities worldwide for academic growth, professional development, and global exposure</p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Globe className="h-5 w-5 mr-2" />
                <span>100+ Countries</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Award className="h-5 w-5 mr-2" />
                <span>Full Funding Available</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <FileText className="h-5 w-5 mr-2" />
                <span>10+ Categories</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="mb-8 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Find Your Opportunity</h2>
          
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                placeholder="Search opportunities..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <RadioGroup 
                className="flex"
                defaultValue="grid"
                onValueChange={(value) => setViewMode(value as 'grid' | 'list' | 'table')}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="grid" id="grid" />
                  <label htmlFor="grid" className="flex items-center">
                    <Grid2X2 className="h-4 w-4 mr-1" />
                    Grid
                  </label>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <RadioGroupItem value="list" id="list" />
                  <label htmlFor="list" className="flex items-center">
                    <List className="h-4 w-4 mr-1" />
                    List
                  </label>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <RadioGroupItem value="table" id="table" />
                  <label htmlFor="table" className="flex items-center">
                    <Table2 className="h-4 w-4 mr-1" />
                    Table
                  </label>
                </div>
              </RadioGroup>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3">Categories</h3>
            <div className="flex flex-wrap gap-2">
              <Button 
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                className="rounded-full transition-all"
                onClick={() => setSelectedCategory(null)}
              >
                All Categories
              </Button>
              
              {uniqueCategories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  className="rounded-full transition-all"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Available Opportunities</h2>
          <p className="text-gray-600">
            Showing {Math.min(itemsPerPage, paginatedOpportunities.length)} of {filteredOpportunities.length} opportunities
          </p>
        </div>
        
        {filteredOpportunities.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="h-16 w-16 mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-medium text-gray-600 mb-2">No opportunities found</h3>
            <p className="text-gray-500">Try adjusting your filters or search term</p>
          </div>
        ) : (
          <Tabs defaultValue={viewMode} className="w-full" onValueChange={(value) => setViewMode(value as 'grid' | 'list' | 'table')}>
            <TabsList className="hidden">
              <TabsTrigger value="grid">Grid</TabsTrigger>
              <TabsTrigger value="list">List</TabsTrigger>
              <TabsTrigger value="table">Table</TabsTrigger>
            </TabsList>
            
            <TabsContent value="grid">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {paginatedOpportunities.map(opportunity => (
                  <Card key={opportunity.id} className="hover:shadow-lg transition-shadow flex flex-col">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start gap-2">
                        <CardTitle className="text-base line-clamp-2">{opportunity.title}</CardTitle>
                        <Badge variant="outline" className="shrink-0 capitalize">{opportunity.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardFooter className="mt-auto pt-2">                      
                      <a href={opportunity.link} target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button className="w-full bg-youth-purple hover:bg-youth-purple/90">View Details</Button>
                      </a>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="list">
              <div className="space-y-4">
                {paginatedOpportunities.map(opportunity => (
                  <div key={opportunity.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center gap-4">
                      <div>
                        <h3 className="font-semibold">{opportunity.title}</h3>
                        <Badge variant="outline" className="mt-1 capitalize">{opportunity.category}</Badge>
                      </div>
                      <a href={opportunity.link} target="_blank" rel="noopener noreferrer">
                        <Button className="shrink-0 bg-youth-purple hover:bg-youth-purple/90">View Details</Button>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="table">
              <div className="border rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paginatedOpportunities.map(opportunity => (
                      <TableRow key={opportunity.id}>
                        <TableCell className="font-medium">{opportunity.title}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="capitalize">{opportunity.category}</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <a href={opportunity.link} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm">View Details</Button>
                          </a>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        )}
        
        {totalPages > 1 && (
          <div className="mt-8">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    className={currentPage === 1 ? "opacity-50 pointer-events-none" : ""}
                  />
                </PaginationItem>
                
                {pageNumbers.map((pageNumber, index) => 
                  pageNumber === 'ellipsis' ? (
                    <PaginationItem key={`ellipsis-${index}`}>
                      <PaginationEllipsis />
                    </PaginationItem>
                  ) : (
                    <PaginationItem key={pageNumber}>
                      <PaginationLink 
                        isActive={currentPage === pageNumber}
                        onClick={() => setCurrentPage(pageNumber as number)}
                      >
                        {pageNumber}
                      </PaginationLink>
                    </PaginationItem>
                  )
                )}
                
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    className={currentPage === totalPages ? "opacity-50 pointer-events-none" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
        
        <div className="mt-12 bg-gray-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How can I apply for these opportunities?</AccordionTrigger>
              <AccordionContent>
                Each opportunity has its own application process. Click on "View Details" to see specific application instructions, required documents, and submission guidelines for the opportunity you're interested in.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What does "Full Funding" mean?</AccordionTrigger>
              <AccordionContent>
                Full funding typically covers tuition fees, living expenses, travel costs, and sometimes includes a stipend. The exact coverage varies by program, so always check the specific details of each opportunity.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Are there opportunities for all academic levels?</AccordionTrigger>
              <AccordionContent>
                Yes, the SEP-700 program includes opportunities for undergraduate students, graduate students, PhD candidates, and post-doctoral researchers across various disciplines and fields of study.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How often are new opportunities added?</AccordionTrigger>
              <AccordionContent>
                We update our database weekly with new opportunities. We recommend checking back regularly or subscribing to our newsletter to stay informed about the latest additions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SEP700;
