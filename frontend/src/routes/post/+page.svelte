<script>
  import DownvoteIconSmall from "../../components/DownvoteIconSmall.svelte";
  import UpvoteIconSmall from "../../components/UpvoteIconSmall.svelte";
  import CommentIcon from "../../components/CommentIcon.svelte";
  import CloseIcon from "../../components/CloseIcon.svelte";
  import DownArrow from "../../components/DownArrow.svelte";
  import SampleProfilePicture from "../../components/SampleProfilePicture.svelte";
  import UpArrow from "../../components/UpArrow.svelte";

  export let comment = "";

  let comments = [];
</script>

<div class="w-full h-full bg-[#717171]">
  <div class="m-auto h-full w-[952px] bg-[#B5B5B5]">
    <div class="bg-black text-white w-full py-2 px-8 flex start-end">
      <div class="ml-auto">
        <a href="/"
          ><div class="flex items-center space-x-[4px]">
            <CloseIcon />
            <p>Close</p>
          </div>
        </a>
      </div>
    </div>

    <div class="flex flex-col space-y-[8px]">
      <div class="bg-white min-h-[249px] flex">
        <div
          class="bg-[#F8F8F8] pt-[16px] border-r-[1px] rounded-l-lg border-[#A0A0A0] w-[45px] min-w-[45px] max-w-[45px]"
        >
          <div class="flex flex-col items-center space-y-[4px]">
            <UpArrow />
            {1}
            <DownArrow />
          </div>
        </div>

        <div class="py-[16px] px-[32px] flex flex-col space-y-[12px]">
          <div class="flex space-x-[8px] items-center">
            <SampleProfilePicture />

            <p class="tracking-[-0.08em] text-[12px] text-[#4B4B4B]">
              Posted by u/{"Author"}
              {"Jan 12, 2022"}
            </p>
          </div>
          <div>
            <p class="text-[24px] font-black tracking-[-0.04em]">{"Title"}</p>
          </div>
          <div>
            <p class="text-justify">
              {"This is my first post in me myself and i"}
            </p>
          </div>
          <div class="flex space-x-[8px]">
            <CommentIcon />
            <p>{0} Comments</p>
          </div>
        </div>
      </div>

      <div
        class="bg-white px-[45px] min-h-full flex flex-col space-y-[32px] py-8"
      >
        <div class="flex space-y-[20px] flex-col">
          <form on:submit|preventDefault={null}>
            <textarea
              bind:value={comment}
              class="p-2 rounded-xl w-full border-[#DEDEDE] border-[1px]"
              placeholder="Text (optional)"
              rows="4"
              name="comment"
              id="comment"
            />
            <button class="flex" type="submit">
              <div class="ml-auto right-0">
                <div
                  class="bg-[#D9D9D9] px-9 py-1 rounded-full text-[20px] font-bold tracking-tighter"
                >
                  Comment
                </div>
              </div>
            </button>
          </form>
          <div class="w-full h-[2px] bg-black" />
        </div>
        {#each comments as comment}
          <div class="flex space-x-[16px]">
            <div>
              <SampleProfilePicture />
            </div>
            <div class="flex flex-col space-y-[12px]">
              <div>
                <p>
                  u/{"karlo"} - {"Jan 12,2022"}
                </p>
              </div>
              <div>
                <p>{comment.content}</p>
              </div>
              <div class="flex items-center space-x-[8px]">
                <div>
                  <UpvoteIconSmall />
                </div>
                <p>{0}</p>
                <div>
                  <DownvoteIconSmall />
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
