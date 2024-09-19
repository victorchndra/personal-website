<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { myStacks } from '../data/stacks';

export default defineComponent({
  name: 'TechStackSection',
  setup() {
    const stackList = myStacks

    const orderList = [
      {label: 'Working Stack', isActive: true, tag: 'working'}, 
      {label: 'Previous Stack', isActive: false, tag: 'previous'},
      {label: 'Alternative Stack', isActive: false, tag: 'alternative'},
    ]

    // Tampilkan data stackList dimana tag pada myStacks[].tag[] === tag pada orderList
    onMounted(() => {
      // myStacks.forEach(key => {
      //   console.log(key)
      // })
      const stackListTest = myStacks
      console.log(stackListTest)
    })

    const indicatorPosition = ref(0)

    const handleOrderSelected = (orderBy:any) => {
      orderList.forEach((item, index) => {
        item.isActive = false
        if(item === orderBy) {
          indicatorPosition.value = index;
        }
      })
      orderBy.isActive = true
    }

    return { 
      stackList,
      orderList,
      indicatorPosition,
      handleOrderSelected
    }
  },
})
</script>

<template>
  <section class="h-[calc(100vh-76px)] md:h-[calc(100vh-108px)] px-5 py-5 flex flex-col gap-5 lg:px-32 snap-center">
    <div>
      <h1 class="font-bowlby-one-sc text-xl md:text-2xl pb-2">TECH STACK.</h1>
      <div class="flex justify-center sm:justify-start">
        <ul class="flex text-xs px-2 py-2 bg-primary rounded-3xl overflow-x-auto max-w-max no-scrollbar">
          <li v-for="orderBy in orderList" :key="orderBy.label" class="text-white px-4 py-1 whitespace-nowrap relative hover:cursor-pointer" @click="handleOrderSelected(orderBy)" ref="listItem">
            <span class="z-10 relative" :class="orderBy.isActive && 'tabActive'">{{ orderBy.label }}</span>
            <div class="indicator" v-if="orderBy.isActive" :style="{ transform: `translateX(${indicatorPosition}px)`}"></div>
          </li>
        </ul>
      </div>

      <!-- Icon Section -->
      <div class="mt-4 grid grid-cols-3 gap-2 justify-between sm:flex sm:flex-wrap sm:justify-start lg:gap-6 overflow-y-auto h-3/5 sm:h-fit no-scrollbar sm-h-optimized lg-h-optimized">
        <template v-for="stacks in stackList" :key="stacks">
          <div v-for="stack in stacks" :key="stack.name" class="bg-white place-self-center p-3 max-w-fit rounded-xl border flex flex-col items-center gap-2">
            <component :is="stack.iconLogo" :width="stack.width" :height="stack.height"/>
            <span v-text="stack.caption" class="text-xs mt-1"></span>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
    display: none;
  }

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.indicator {
  @apply absolute w-full h-full bg-white top-0 left-0 rounded-full transition-all duration-500 ease-in-out;
}

.tabActive {
  @apply text-primary;
}

@media (max-width: 639px) {
  .sm-h-optimized {
    height: 420px;
  }

  @media (min-height: 680px) {
    .sm-h-optimized {
      height: 450px;
    }
  }
  
  @media (min-height: 740px) {
    .sm-h-optimized {
      height: 520px;
    }
  }
  
  @media (min-height: 844px) {
    .sm-h-optimized {
      height: 630px;
    }
  }
}

@media (min-width: 1024px) {
  @media (min-height: 680px) {
    .lg-h-optimized {
      height: fit-content;
      max-height: 450px;
    }
  }

  @media (min-height: 1024px) {
    .lg-h-optimized {
      height: fit-content;
      max-height: none;
    }
  }
}
</style>