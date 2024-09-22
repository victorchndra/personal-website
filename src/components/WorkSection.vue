<script lang="ts">
import { Calendar, MapPin } from 'lucide-vue-next';
import { defineComponent, onMounted } from 'vue'
import { experiences } from '../data/experiences';
import moment from 'moment';
import { projects } from '../data/projects';

export default defineComponent({
  name: 'WorkSection',
  components: {
    MapPin,
    Calendar
  },
  setup() {

    // onMounted(() => {
    //   experiences.forEach((exp) => {
    //     console.log(moment(exp.quit_date).format('MMM YYYY'))
    //   })
    // })

    return {
      experiences,
      projects,
      moment,
    }
  }
})
</script>

<template>
  <section id="work" class="h-[calc(100vh-76px)] md:h-[calc(100vh-108px)] px-5 py-5 flex flex-col gap-5 lg:px-32 snap-center items-center lg:justify-center">
    <div class="flex flex-wrap w-full max-w-[1024px] lg:pb-20">

      <!-- section 1 -->
      <div class="w-full md:w-1/2 flex flex-col items-center px-4 mb-4 md:mb-0">
        <h1 class="font-bowlby-one-sc text-lg md:text-xl pb-4">Highlighted Projects</h1>
        <ul class="flex flex-col space-y-2 lg:space-y-4 overflow-y-auto h-52 no-scrollbar md:h-[500px]">
          
          <li v-for="project in projects" :key="project.title">
            <a :href="project.link" class="border rounded-xl min-h-24 px-6 py-4 w-80 lg:w-96 flex flex-col hover:cursor-pointer hover:shadow-md transition-all duration-200 ease-in-out" target="_blank">
              <div class="flex justify-between items-center hover:text-zinc-500">
                <h2 class="font-bold uppercase text-sm lg:text-base">{{ project.title }}</h2>
                <span>»</span>
              </div>
              <p class="text-sm lg:text-base text-zinc-600">{{ project.desc }}.</p>
            </a>
          </li>

          <!-- <a href="" class="border rounded-xl min-h-24 px-6 py-4 w-80 lg:w-96 flex flex-col hover:cursor-pointer hover:shadow-md transition-all duration-200 ease-in-out">
            <div class="flex justify-between items-center hover:text-zinc-500">
              <h2 class="font-bold uppercase text-sm lg:text-base">Project 2</h2>
              <span>»</span>
            </div>
            <p class="text-sm lg:text-base text-zinc-600">this is description for project 2.</p>
          </a>

          <a href="" class="border rounded-xl min-h-24 px-6 py-4 w-80 lg:w-96 flex flex-col hover:cursor-pointer hover:shadow-md transition-all duration-200 ease-in-out">
            <div class="flex justify-between items-center hover:text-zinc-500">
              <h2 class="font-bold uppercase text-sm lg:text-base">Project 3</h2>
              <span>»</span>
            </div>
            <p class="text-sm lg:text-base text-zinc-600">this is description for project 3.</p>
          </a>

          <a href="" class="border rounded-xl min-h-24 px-6 py-4 w-80 lg:w-96 flex flex-col hover:cursor-pointer hover:shadow-md transition-all duration-200 ease-in-out">
            <div class="flex justify-between items-center hover:text-zinc-500">
              <h2 class="font-bold uppercase text-sm lg:text-base">Project 4</h2>
              <span>»</span>
            </div>
            <p class="text-sm lg:text-base text-zinc-600">this is description for project 4.</p>
          </a> -->
        </ul>
      </div>

      <!-- section 2 -->
      <div class="w-full md:w-1/2 flex flex-col items-center ">
        <h1 class="font-bowlby-one-sc text-lg md:text-xl pb-4">Work Experience</h1>
        <div v-for="exp, index in experiences" :key="index" class="flex flex-col w-5/6 min-w-72 max-w-80 md:max-w-96 ">
          <div class="flex gap-3">
            <span class="relative flex h-3 w-3">
              <span v-if="exp.is_active" class="animate-ping absolute top-[6px] inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span class="relative inline-flex top-[6px] rounded-full h-3 w-3" :class="exp.is_active ? 'bg-yellow-500' : 'bg-zinc-400'"></span>
            </span>
            <div class="flex flex-col w-fit">
              <p>{{ exp.role }} - {{ exp.company }}</p>
              <span class="flex gap-2 text-zinc-500 text-sm items-center">
                <MapPin width="1rem" />
                {{ exp.location }}
                <span v-if="exp.job_type !== 'self-employed'" class="capitalize">({{ exp.job_type }})</span>
              </span>
              <span class="flex gap-2 text-zinc-500 text-sm items-center"><Calendar width="1rem" />
                {{ moment(exp.joined_date).format('MMM YYYY') }} - {{ exp.quit_date ? moment(exp.quit_date).format('MMM YYYY') : 'Present'}}
              </span>
            </div>
          </div>
          <hr v-if="index !== (experiences.length-1)" class="w-full h-px bg-gray-200 border-0 my-2">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
h1 {
  display: flex;
  justify-content: center;
}

.no-scrollbar::-webkit-scrollbar {
    display: none;
  }

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>