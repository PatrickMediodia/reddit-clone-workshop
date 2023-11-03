<script lang="ts">
  import DownArrow from "./DownArrow.svelte";
  import UpArrow from "./UpArrow.svelte";
  import SampleProfilePicture from "./SampleProfilePicture.svelte";

  export let id: Number;
  export let authorUsername: String;
  export let title: String;
  export let body: String;
  export let numOfComments: Number;
  export let numOfUpvotes: Number;
</script>

<div
  class="bg-white border-[1px] border-[#A0A0A0] rounded-lg min-h-[249px] flex"
>
  <div
    class="bg-[#F8F8F8] pt-[16px] border-r-[1px] rounded-l-lg border-[#A0A0A0] w-[45px] min-w-[45px] max-w-[45px]"
  >
    <div class="flex flex-col items-center space-y-[4px]">
      <UpArrow />
      {numOfUpvotes}
      <DownArrow />
    </div>
  </div>
  <a href={`/post`}>
    <div class="py-[16px] px-[32px] flex flex-col space-y-[12px]">
      <div class="flex space-x-[8px] items-center">
        <SampleProfilePicture />

        <p class="tracking-[-0.08em] text-[12px] text-[#4B4B4B]">
          Posted by u/{authorUsername}
          {25}
        </p>
      </div>
      <div>
        <p class="text-[24px] font-black tracking-[-0.04em]">{title}</p>
      </div>
      <div>
        <p class="text-justify">
          {body}
        </p>
      </div>
      <div class="flex space-x-[8px]">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <rect width="24" height="24" fill="url(#pattern8)" />
          <defs>
            <pattern
              id="pattern8"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlink:href="#image0_7_336" transform="scale(0.01)" />
            </pattern>
            <image
              id="image0_7_336"
              width="100"
              height="100"
              xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAADAklEQVR4nO3dO2sVQRjG8X+MFxTxchoRESwCFlp5qcRGQQsRG0Wws9Be/QJ+AXtLL1gY2yCGoIWNoCIIiXYaCIKCEFuLGIsTIUjOzszOnJl3dp8fbLWXd3Yfdnd29+weEBERERERERERqcNExLxHgRPAvkRt6YJV4AfwFvicq+hlYGGtuIbRw0fgYstt7GUb8NDAitY23Ae2tNjejSaAJwZWrtbhQfgmb3bDwErVPlzz2dA+J/WtwCKw32eBMtIiMAWsNE20yWNBZ1EYKRwCTrkm8gnkdHxbZI1zW272WIhr71gGvng1p/umgN0N4w+4FuATyHbH+FcMr00EZoALDeNd29LrkCUZKRBjFIgxCsQYBZKX80JcgRijQNJajV2AAjFGgRijQIxRIHk5e1k+97LG4R5wsFBtX0vAncB5ok/qpQI5DxwpVNvXAuGBxPyKB9AhKzV1e7tGgRijQPLSvazaKBBjSnV7Z4FPhWr7Wmoxj6uXZfbCMLR/3xXObrEOWXnppF4bBWKMAjFGgRijQIxRIGlFX4eUCmSe/G8wXcmyZpG0hxijQIxRIMYoEGMUSF5me1ldpR85dE3J5yG7Mtd8k7neRsw+oJotVLc0PaCqjQLJS72szNTL6hoFYowCMUaB5KWTem0UiDEKJC0T7xjuBY4nWE5tvgPfAudJci9r2TH+DPDeqznd8gs4B7wLmCfJvayvAQX7ZA/wAjgWME+SXtbzgIJ9MwBeAidTLdAnkHngdaqCHbR+T8l2L+sW8Du2WIcNgDngsGO6ZBeGH4CbwB/P6ftowPA/VaKEXIc8Ai4BP2OLymihF4YzDL/efBf7L21WKfZjKTsYftVnZ4K21OA2nn87McI0cDVRWwSYZHjobvsL/KeuArqXFWYFuA48HlcBBRJurKEokHbGvqdIO6HnlOkyzeyXkFAUSCa+oSiQjHxCUSCZuUJRIAU0haJAChkVyrOSjeq7jUJRIIX9H4oCMWB9KM5ASr3S1if/brOAxx9LSj6TVPIBHBERqdNfsInnMRU2lcYAAAAASUVORK5CYII="
            />
          </defs>
        </svg>
        <p>{numOfComments} Comments</p>
      </div>
    </div>
  </a>
</div>
