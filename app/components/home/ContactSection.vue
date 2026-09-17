<script setup lang="ts">
import { personal } from '~/data/personal'
import { translations } from '~/data/translations'

const { locale } = useLanguage()
const t = computed(() => translations[locale.value])
const { form, isSubmitting, status, feedback, submit } = useContact()
</script>

<template>
  <section id="contact" class="py-20 lg:py-28" data-aos="fade-up" data-aos-delay="80">
    <div class="container-shell">
      <div class="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div data-aos="fade-right" data-aos-delay="120">
          <UiSectionTitle :eyebrow="t.contact.eyebrow" :title="t.contact.title" />
          <p class="text-lg leading-8 text-slate-600 dark:text-slate-300">
            {{ t.contact.intro }}
          </p>

          <div class="mt-8 space-y-4 text-base text-slate-700 dark:text-slate-200">
            <p><span class="font-semibold">{{ t.contact.location }}</span></p>
            <p><span class="font-semibold">{{ personal.phone }}</span></p>
            <p><a :href="`mailto:${personal.email}`" class="font-semibold text-[#082F5A] hover:text-[#2E7D32] dark:text-white">{{ personal.email }}</a></p>
            <p><a :href="personal.github" target="_blank" rel="noreferrer" class="font-semibold text-[#082F5A] hover:text-[#2E7D32] dark:text-white">github.com/jeancode1234</a></p>
            <p><a :href="personal.linkedin" target="_blank" rel="noreferrer" class="font-semibold text-[#082F5A] hover:text-[#2E7D32] dark:text-white">linkedin.com/in/HOUAFO-jean</a></p>
          </div>
        </div>

        <form data-aos="fade-left" data-aos-delay="150" class="rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_18px_35px_rgba(15,23,42,0.05)] backdrop-blur-sm dark:border-slate-700 dark:bg-[#0D1B2A]/80" @submit.prevent="submit">
          <div class="grid gap-5 md:grid-cols-2">
            <label class="block">
              <span class="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">{{ t.contact.fullname }}</span>
              <input v-model="form.name" type="text" class="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-[#082F5A] dark:border-slate-700 dark:bg-[#0D1B2A] dark:text-slate-200" :placeholder="t.contact.placeholderName" />
            </label>

            <label class="block">
              <span class="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">{{ t.contact.email }}</span>
              <input v-model="form.email" type="email" class="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-[#082F5A] dark:border-slate-700 dark:bg-[#0D1B2A] dark:text-slate-200" :placeholder="t.contact.placeholderEmail" />
            </label>
          </div>

          <label class="mt-5 block">
            <span class="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">{{ t.contact.subject }}</span>
            <input v-model="form.subject" type="text" class="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-[#082F5A] dark:border-slate-700 dark:bg-[#0D1B2A] dark:text-slate-200" :placeholder="t.contact.placeholderSubject" />
          </label>

          <label class="mt-5 block">
            <span class="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">{{ t.contact.message }}</span>
            <textarea v-model="form.message" rows="6" class="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-[#082F5A] dark:border-slate-700 dark:bg-[#0D1B2A] dark:text-slate-200" :placeholder="t.contact.placeholderMessage"></textarea>
          </label>

          <div class="mt-5 flex items-center gap-4">
            <button type="submit" class="primary-button" :disabled="isSubmitting">
              {{ isSubmitting ? t.contact.sending : t.contact.send }}
            </button>
          </div>

          <p v-if="status === 'success'" class="mt-4 text-sm text-[#2E7D32]">{{ feedback }}</p>
          <p v-else-if="status === 'error'" class="mt-4 text-sm text-red-600">{{ feedback }}</p>
        </form>
      </div>
    </div>
  </section>
</template>
