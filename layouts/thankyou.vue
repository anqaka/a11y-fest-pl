<template>
  <div class="slidev-layout thanks circle">
    <Snowdog/>
    <div class="my-auto w-full center">
      <h1>Dziękuję bardzo!</h1>
      <div class="author" > {{ $slidev.configs.author }}</div>
      <div><ic-mail-outline /> <a href="mailto:{{ $slidev.configs.email }}">{{ $slidev.configs.email }}</a></div>
      <div class="mt-2"><mdi-linkedin /> <a href="{{ $slidev.configs.linkedin }}" target="_blank">
            Linkedin
          </a></div>
    </div>
  </div>
</template>
