<script>
  import SortControversialIcon from "../../components/SortControversialIcon.svelte";
  import SortNewIcon from "../../components/SortNewIcon.svelte";
  import SortBestIcon from "../../components/SortBestIcon.svelte";
  import Post from "../../components/Post.svelte";
  // export let data;
</script>

<div class="flex flex-col space-y-[16px] mt-[42px]">
  <div class="bg-white border-[1px] p-4 border-[#A0A0A0] rounded-lg">
    <div class="flex space-x-[55px]">
      <a class="flex items-center space-x-[8px]" href="/?sortBy=new">
        <SortNewIcon />
        <p class="font-bold text-[24px] tracking-[-0.08em]">Whats new?</p>
      </a>
      <a class="flex items-center space-x-[8px]" href="/?sortBy=best">
        <SortBestIcon />
        <p class="font-bold text-[24px] tracking-[-0.08em]">Best</p>
      </a>
      <a class="flex items-center space-x-[8px]" href="/?sortBy=controversial">
        <SortControversialIcon />
        <p class="font-bold text-[24px] tracking-[-0.08em]">Controversial</p>
      </a>
    </div>
  </div>

  <!-- {#each data["posts"] as post} -->
  <Post
    authorUsername={"John Doe"}
    id={1}
    title={"This is my Second Post"}
    body={"This is my first post in me myself and i"}
    numOfComments={0}
    numOfUpvotes={0}
    datePosted={null}
  />
  
  <!-- {/each} -->
</div>
