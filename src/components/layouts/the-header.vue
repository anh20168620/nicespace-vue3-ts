<template>
  <div
    class="flex items-center justify-between h-[48px] px-4 lg:px-[120px] lg:h-20 lg:bg-white"
    @click="$emit('closeModal')"
  >
    <img
      src="../../assets/images/Logo.png"
      alt="logo nicespace"
      class="w-[106px] h-[24px] lg:w-[123px] lg:h-[28px]"
    />

    <div
      class="flex justify-between items-center gap-4 lg:flex-row-reverse lg:w-full"
    >
      <div class="w-6 h-6 p-1 lg:w-11 lg:h-11 lg:p-[12px]">
        <img
          src="../../assets/images/cart.png"
          alt="cart nicespaces"
          class="h-full w-full"
        />
      </div>

      <div class="flex gap-2">
        <div
          class="flex gap-2 items-center px-4"
          @click.stop="$emit('toggleModal')"
        >
          <div class="w-6 h-6 p-1 lg:w-11 lg:h-11 lg:p-[12px] lg:ml-[15px]">
            <img
              src="../../assets/images/dropdown.png"
              alt="dropdown nicespace"
              class="h-full w-full"
            />
          </div>
          <span class="font-semibold text-sm hidden lg:block">Danh mục</span>
        </div>

        <div
          class="gap-2 px-4 bg-grey-1 rounded-[32px] items-center hidden lg:flex"
        >
          <img
            src="@/assets/images/search.png"
            alt="search nicespace"
            class=""
          />
          <input
            type="text"
            class="bg-[#f6f9fc] placeholder:text-grey-5 placeholder:text-sm placeholder:font-semibold outline-none w-[500px]"
            placeholder="Tên sản phẩm, hãng..."
          />
        </div>

        <div class="lg:flex hidden gap-2 px-4 items-center">
          <img src="@/assets/images/phone.png" alt="" class="" />
          <span class="font-semibold text-sm">1900.63.3579</span>
        </div>
      </div>
    </div>
  </div>
</template>
