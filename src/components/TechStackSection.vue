<script lang="ts">
import { defineComponent, ref, shallowRef, watchEffect } from 'vue'
import { myStacks } from '../data/stacks';
import { TechStack } from '../types/TechStack';

export default defineComponent({
  name: 'TechStackSection',
  setup() {
    const stackList = shallowRef([])

    const orderList = ref([
      {label: 'Working Stack', isActive: true, tag: 'working'}, 
      {label: 'Previous Stack', isActive: false, tag: 'previous'},
      {label: 'Alternative Stack', isActive: false, tag: 'alternative'},
      // {label: 'Web3 Stack', isActive: false, tag: 'web3'},
    ])

    watchEffect(() => {
      // if stackList.value contains data, then remove the data
      if(stackList.value.length > 0) {
        Object.keys(stackList.value).forEach(() => {
          stackList.value.pop()
        })
      }

      // push the data into stackList where tag in myStacks[].tag[] === tag in orderList
      Object.keys(myStacks).forEach(key => {
        const stacks: TechStack[] = myStacks[key] as TechStack[];
        Object.keys(stacks).forEach(key => {
          const stackData = stacks[key]

          orderList.value.forEach((list) => {
            if(list.isActive) {
              stackData.tag.forEach((stack) => {
                if(stack == list.tag) {
                  stackList.value.push(stackData)
                }
              })
            }
          })
        })
      })      
    })

    const indicatorPosition = ref(0)

    const handleOrderSelected = (orderBy:any) => {
      orderList.value.forEach((item, index) => {
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
  <section id="expertise" class="h-[calc(100vh-76px)] md:h-[calc(100vh-108px)] px-5 py-5 flex flex-col gap-5 lg:px-32 snap-center">
    <div>
      <h1 class="font-bowlby-one-sc text-xl md:text-2xl pb-2">TECH STACK.</h1>
      <div class="flex justify-center sm:justify-start">
        <ul class="flex text-xs px-2 py-2 bg-primary rounded-3xl overflow-x-auto max-w-max no-scrollbar">
          <li v-for="orderBy in orderList" :key="orderBy.label" class="text-white px-4 py-1 whitespace-nowrap relative hover:cursor-pointer" @click="handleOrderSelected(orderBy)" ref="listItem">
            <span class="z-10 relative" :class="orderBy.isActive && 'text-primary'">{{ orderBy.label }}</span>
            <div class="indicator" v-if="orderBy.isActive" :style="{ transform: `translateX(${indicatorPosition}px)`}"></div>
          </li>
        </ul>
      </div>

      <!-- Icon Section -->
      <div class="mt-4 grid grid-cols-3 gap-2 justify-between sm:flex sm:flex-wrap sm:justify-start lg:gap-6 overflow-y-auto h-3/5 sm:h-fit no-scrollbar sm-h-optimized lg-h-optimized">
        <div v-for="stack in stackList" :key="stack.name" class="bg-white place-self-center p-3 max-w-fit rounded-xl border flex flex-col items-center gap-2">
          <component :is="stack.iconLogo" :width="stack.width" :height="stack.height"/>
          <span v-text="stack.caption" class="text-xs mt-1"></span>
        </div>
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

@media (max-width: 639px) {
  .sm-h-optimized {
    height: fit-content;
    max-height: 420px;
  }

  @media (min-height: 680px) {
    .sm-h-optimized {
      height: fit-content;
      max-height: 450px;
    }
  }
  
  @media (min-height: 740px) {
    .sm-h-optimized {
      height: fit-content;
      max-height: 520px;
    }
  }
  
  @media (min-height: 844px) {
    .sm-h-optimized {
      height: fit-content;
      max-height: 630px;
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