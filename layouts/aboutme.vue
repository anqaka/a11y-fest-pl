<template>
  <div class="grid grid-cols-2 content-center ">
    <div class="slidev-layout left-only text-left">
      <div class="my-auto">
        <h1 class="author"> {{ $slidev.configs.author }}</h1>
        <div class="position h-[150px] leading-6">
          {{ $slidev.configs.position }}
          <br/>
          {{ $slidev.configs.position2 }}
          <br/><span class="text-base">Snowdog</span>
        </div>
        <div>
          <ic-mail-outline/>&nbsp;
          <a :href="`mailto:${$slidev.configs.email}`">{{ $slidev.configs.email }}</a>
        </div>
        <div>
          <mdi-linkedin/>&nbsp;
          <a :href="$slidev.configs.linkedin" target="_blank">
            Linkedin
          </a>
        </div>
      </div>
    </div>
    <div>
      <img :src="$slidev.configs.profilePicture" :alt="$slidev.configs.author" />
    </div>
  </div>
</template>
