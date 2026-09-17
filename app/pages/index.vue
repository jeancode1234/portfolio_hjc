<script setup lang="ts">
import { personal } from '~/data/personal'
import { education } from '~/data/education'
import { experiences } from '~/data/experiences'
import { projects, projectFilters } from '~/data/projects'

useSeoMeta({
  title: 'Jean Cabrel Houafo | Développeur Web Fullstack',
  description: 'Portfolio de Jean Cabrel Houafo, développeur Web Fullstack spécialisé en Laravel, VueJS, NuxtJS, Java, MySQL et API REST.',
  ogTitle: 'Jean Cabrel Houafo | Développeur Web Fullstack',
  ogDescription: 'Portfolio de Jean Cabrel Houafo, développeur Web Fullstack spécialisé en Laravel, VueJS, NuxtJS, Java, MySQL et API REST.',
  ogType: 'website',
  ogImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Jean Cabrel Houafo | Développeur Web Fullstack',
  twitterDescription: 'Portfolio de Jean Cabrel Houafo, développeur Web Fullstack spécialisé en Laravel, VueJS, NuxtJS, Java, MySQL et API REST.'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://example.com/' },
    { rel: 'icon', href: '/favicon.svg' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: personal.name,
        jobTitle: personal.title,
        email: `mailto:${personal.email}`,
        telephone: personal.phone,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Douala',
          addressCountry: 'CM'
        },
        url: 'https://example.com',
        sameAs: [personal.github, personal.linkedin]
      })
    }
  ]
})

const { selectedFilter, filteredProjects, selectedProject, setFilter, openProject, closeProject } = useProjects()
const { form, isSubmitting, status, feedback, submit } = useContact()
const { scrollY } = useScroll()

const contactLinks = [
  { label: 'GitHub', href: personal.github },
  { label: 'LinkedIn', href: personal.linkedin }
]

const educationalItems = education
</script>

<template>
  <div class="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(8,47,90,0.06),transparent_25%),linear-gradient(180deg,#f8fafc_0%,#f1f5f9_100%)] text-slate-900 transition-colors duration-300 dark:bg-[radial-gradient(circle_at_top,_rgba(46,125,50,0.1),transparent_28%),linear-gradient(180deg,#07111F_0%,#091625_100%)] dark:text-slate-100">
    <LayoutAppNavbar />

    <main>
      <HomeHeroSection />
      <HomeAboutSection />
      <HomeStatsSection />
      <HomeSkillsSection />
      <HomeExperienceSection />
      <HomeProjectsSection
        :selected-filter="selectedFilter"
        :filtered-projects="filteredProjects"
        @set-filter="setFilter"
        @open-project="openProject"
      />
      <HomeEducationSection />
      <HomeServicesSection />
      <HomeProcessSection />
      <HomeContactSection />
    </main>

    <LayoutAppFooter />
    <UiScrollToTop />
    <ProjectsProjectModal :project="selectedProject" @close="closeProject" />
  </div>
</template>
