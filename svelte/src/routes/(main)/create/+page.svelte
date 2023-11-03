<script>
  let title = "";
  let content = "";
</script>

<div class="mt-[42px] flex flex-col space-y-[34px]">
  <div class="w-full flex flex-col space-y-[24px]">
    <div class="text-[32px] tracking-[-0.08em] font-bold">Create a post</div>
    <div class="w-full h-[2px] bg-white" />
  </div>
  <div
    class="bg-white flex flex-col space-y-4 border-[1px] p-8 border-[#A0A0A0] rounded-lg"
  >
    <div>
      <input
        bind:value={title}
        type="text"
        class="p-2 rounded-xl w-full border-[#DEDEDE] border-[1px]"
        placeholder="Title"
      />
    </div>
    <div>
      <textarea
        bind:value={content}
        class="p-2 rounded-xl w-full border-[#DEDEDE] border-[1px]"
        placeholder="Text (optional)"
        rows="9"
      />
    </div>
    <button class="ml-auto right-0" type="button" on:click={submitPost}>
      <div
        class="bg-[#D9D9D9] px-9 py-1 rounded-full text-[20px] font-bold tracking-tighter"
      >
        Post
      </div>
    </button>
  </div>
</div>
