<script lang="ts" setup>
import type { MegaMenu } from '@thunder/types';

const { megaMenu } = defineProps<{
  megaMenu: MegaMenu;
}>();

const localePath = useLocalePath();

const { showMegaMenu } = useMegaMenu();

const menuItems = computed(() => megaMenu.children ?? []);

const activeSubmenus: Ref<string[]> = ref([]);

function toggleSubmenu(id: string) {
  if (id) {
    if (activeSubmenus.value.includes(id)) {
      activeSubmenus.value = activeSubmenus.value.filter(
        (submenuId) => submenuId !== id
      );
    } else {
      activeSubmenus.value.push(id);
    }
  }
}

function isSubmenuOpen(id: string) {
  if (id) {
    return activeSubmenus.value.includes(id);
  }
  return false;
}

function handleLink(url = '', containsProducts = false) {
  if (url && containsProducts) {
    showMegaMenu.value = false;

    navigateTo({
      path: localePath(getCategoryUrl(url))
    });
  }
}
</script>

<template>
  <USlideover v-model="showMegaMenu" :side="'left'">
    <div class="h-full overflow-auto p-8">
      <div class="mb-4 flex justify-between">
        <span class="text-2xl font-bold">
          {{ $t('messages.shop.catalog') }}
        </span>
        <Icon
          name="ri:close-fill"
          class="text-2xl hover:cursor-pointer"
          @click="showMegaMenu = false"
        />
      </div>
      <nav>
        <ul>
          <li
            v-for="category in menuItems"
            :key="category?.uid"
            class="border-b py-4"
          >
            <div
              class="flex w-full justify-between"
              @click="toggleSubmenu(category?.uid ?? '')"
            >
              <a
                class="hover:cursor-pointer"
                @click.stop="
                  handleLink(category.urlPath || '', !!category.productCount)
                "
              >
                {{ category?.name }}
              </a>
              <Icon
                v-if="category?.children?.length"
                :name="
                  isSubmenuOpen(category?.uid)
                    ? 'solar:alt-arrow-up-linear'
                    : 'solar:alt-arrow-down-linear'
                "
              />
            </div>

            <ul v-if="isSubmenuOpen(category?.uid ?? '')" class="pl-4">
              <li
                v-for="subcategory in category?.children"
                :key="subcategory?.uid"
                class="border-b py-4 last:border-none last:pb-0"
              >
                <div
                  class="flex w-full justify-between hover:cursor-pointer"
                  @click="toggleSubmenu(subcategory?.uid ?? '')"
                >
                  <a
                    @click.stop="
                      handleLink(
                        subcategory.urlPath || '',
                        !!subcategory.productCount
                      )
                    "
                    >{{ subcategory.name }}</a
                  >
                  <Icon
                    v-if="subcategory?.children?.length"
                    :name="
                      isSubmenuOpen(subcategory?.uid)
                        ? 'solar:alt-arrow-up-linear'
                        : 'solar:alt-arrow-down-linear'
                    "
                  />
                </div>

                <ul
                  v-if="isSubmenuOpen(subcategory?.uid ?? '')"
                  class="mt-2 pl-4"
                >
                  <li
                    v-for="subSubcategory in subcategory?.children"
                    :key="subSubcategory?.uid"
                    class="py-2"
                  >
                    <a
                      class="hover:cursor-pointer"
                      @click.stop="
                        handleLink(
                          subSubcategory.urlPath || '',
                          !!subSubcategory.productCount
                        )
                      "
                      >{{ subSubcategory.name }}</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </USlideover>
</template>
