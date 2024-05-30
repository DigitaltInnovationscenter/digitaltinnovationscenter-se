<script>
  import NewsOverviewMini from "$lib/components/news/NewsOverviewMini.svelte";
  import Hero from "$lib/components/shared/Hero.svelte";
  import NewsOverview from "$lib/components/shared/NewsOverview.svelte";
</script>

<Hero
  data={{
    SubHeader: "En inblick i vår vardag",
    MainHeader: "Aktuellt",
    Description:
      "Här kan du hålla dig uppdaterad om våra pågående projekt, vad vi åstadkommit under senaste sprinten och delar med oss av de senaste trenderna och tankarna inom vår bransch. ",
  }}
/>

<!-- 
    data.Image.data.attributes.url
    data.Date
    data.Header
    data.Body
    data.Author
    data.TimeToRead
 -->

<NewsOverview
  bgColor="bg-gray-50"
  headerType={null}
  data={{
    Header: "Hello",
    Projects: [
      {
        Date: "2025-05-01",
        Header: "The 8 best landing page builders, reviewed",
        Body: "Lorem ipsum kuckelurar du på en tur, fur hur, mur. Det finns kur ipsum opsi.",
        Author: "Fredric Färholt",
        TimeToRead: "4",
        Image: {
          data: {
            attributes: {
              url: "/uploads/chatgpt_plus_c45634f2fe.webp",
            },
          },
        },
      },
      {
        Date: "2025-05-01",
        Header: "The 8 best landing page builders, reviewed",
        Body: "Lorem ipsum kuckelurar du på en tur, fur hur, mur. Det finns kur ipsum opsi.",
        Author: "Fredric Färholt",
        TimeToRead: "4",
        Image: {
          data: {
            attributes: {
              url: "/uploads/image_21_2ea2ecdfb2.webp",
            },
          },
        },
      },
      {
        Date: "2025-05-01",
        Header: "The 8 best landing page builders, reviewed",
        Body: "Lorem ipsum kuckelurar du på en tur, fur hur, mur. Det finns kur ipsum opsi.",
        Author: "Fredric Färholt",
        TimeToRead: "4",
        Image: {
          data: {
            attributes: {
              url: "/uploads/1_b7ef10771b.webp",
            },
          },
        },
      },
      {
        Date: "2025-05-01",
        Header: "The 8 best landing page builders, reviewed",
        Body: "Lorem ipsum kuckelurar du på en tur, fur hur, mur. Det finns kur ipsum opsi.",
        Author: "Fredric Färholt",
        TimeToRead: "4",
        Image: {
          data: {
            attributes: {
              url: "/uploads/chat_plugins_fec5a66f84.webp",
            },
          },
        },
      },
      {
        Date: "2025-05-01",
        Header: "The 8 best landing page builders, reviewed",
        Body: "Lorem ipsum kuckelurar du på en tur, fur hur, mur. Det finns kur ipsum opsi.",
        Author: "Fredric Färholt",
        TimeToRead: "4",
        Image: {
          data: {
            attributes: {
              url: "/uploads/dall_e_2_update_603244c729.webp",
            },
          },
        },
      },
      {
        Date: "2025-05-01",
        Header: "The 8 best landing page builders, reviewed",
        Body: "Lorem ipsum kuckelurar du på en tur, fur hur, mur. Det finns kur ipsum opsi.",
        Author: "Fredric Färholt",
        TimeToRead: "4",
        Image: {
          data: {
            attributes: {
              url: "/uploads/improving_mathematical_reasoning_with_process_supervision_5d50e6fabb.webp",
            },
          },
        },
      },
    ],
  }}
/>
<NewsOverviewMini
  data={{
    Header: "Hello",
    Projects: [
      {
        Date: "2025-05-01",
        Header: "The 8 best landing page builders, reviewed",
        Author: "Fredric Färholt",
        TimeToRead: "4",
        Image: {
          data: {
            attributes: {
              url: "/uploads/chatgpt_plus_c45634f2fe.webp",
            },
          },
        },
      },
      {
        Date: "2025-05-01",
        Header: "The 8 best landing page builders, reviewed",
        Author: "Fredric Färholt",
        TimeToRead: "4",
        Image: {
          data: {
            attributes: {
              url: "/uploads/image_21_2ea2ecdfb2.webp",
            },
          },
        },
      },
      {
        Date: "2025-05-01",
        Header: "The 8 best landing page builders, reviewed",
        Author: "Fredric Färholt",
        TimeToRead: "4",
        Image: {
          data: {
            attributes: {
              url: "/uploads/1_b7ef10771b.webp",
            },
          },
        },
      },
      {
        Date: "2025-05-01",
        Header: "The 8 best landing page builders, reviewed",
        Author: "Fredric Färholt",
        TimeToRead: "4",
        Image: {
          data: {
            attributes: {
              url: "/uploads/chat_plugins_fec5a66f84.webp",
            },
          },
        },
      },
      {
        Date: "2025-05-01",
        Header: "The 8 best landing page builders, reviewed",
        Author: "Fredric Färholt",
        TimeToRead: "4",
        Image: {
          data: {
            attributes: {
              url: "/uploads/dall_e_2_update_603244c729.webp",
            },
          },
        },
      },
      {
        Date: "2025-05-01",
        Header: "The 8 best landing page builders, reviewed",
        Author: "Fredric Färholt",
        TimeToRead: "4",
        Image: {
          data: {
            attributes: {
              url: "/uploads/improving_mathematical_reasoning_with_process_supervision_5d50e6fabb.webp",
            },
          },
        },
      },
      {
        Date: "2025-05-01",
        Header: "The 8 best landing page builders, reviewed",
        Author: "Fredric Färholt",
        TimeToRead: "4",
        Image: {
          data: {
            attributes: {
              url: "/uploads/chatgpt_plus_c45634f2fe.webp",
            },
          },
        },
      },
      {
        Date: "2025-05-01",
        Header: "The 8 best landing page builders, reviewed",
        Author: "Fredric Färholt",
        TimeToRead: "4",
        Image: {
          data: {
            attributes: {
              url: "/uploads/image_21_2ea2ecdfb2.webp",
            },
          },
        },
      },
      {
        Date: "2025-05-01",
        Header: "The 8 best landing page builders, reviewed",
        Author: "Fredric Färholt",
        TimeToRead: "4",
        Image: {
          data: {
            attributes: {
              url: "/uploads/1_b7ef10771b.webp",
            },
          },
        },
      },
      {
        Date: "2025-05-01",
        Header: "The 8 best landing page builders, reviewed",
        Author: "Fredric Färholt",
        TimeToRead: "4",
        Image: {
          data: {
            attributes: {
              url: "/uploads/chat_plugins_fec5a66f84.webp",
            },
          },
        },
      },
      {
        Date: "2025-05-01",
        Header: "The 8 best landing page builders, reviewed",
        Author: "Fredric Färholt",
        TimeToRead: "4",
        Image: {
          data: {
            attributes: {
              url: "/uploads/dall_e_2_update_603244c729.webp",
            },
          },
        },
      },
      {
        Date: "2025-05-01",
        Header: "The 8 best landing page builders, reviewed",
        Author: "Fredric Färholt",
        TimeToRead: "4",
        Image: {
          data: {
            attributes: {
              url: "/uploads/improving_mathematical_reasoning_with_process_supervision_5d50e6fabb.webp",
            },
          },
        },
      },
      {
        Date: "2025-05-01",
        Header: "The 8 best landing page builders, reviewed",
        Author: "Fredric Färholt",
        TimeToRead: "4",
        Image: {
          data: {
            attributes: {
              url: "/uploads/chatgpt_plus_c45634f2fe.webp",
            },
          },
        },
      },
      {
        Date: "2025-05-01",
        Header: "The 8 best landing page builders, reviewed",
        Author: "Fredric Färholt",
        TimeToRead: "4",
        Image: {
          data: {
            attributes: {
              url: "/uploads/image_21_2ea2ecdfb2.webp",
            },
          },
        },
      },
      {
        Date: "2025-05-01",
        Header: "The 8 best landing page builders, reviewed",
        Author: "Fredric Färholt",
        TimeToRead: "4",
        Image: {
          data: {
            attributes: {
              url: "/uploads/1_b7ef10771b.webp",
            },
          },
        },
      },
      {
        Date: "2025-05-01",
        Header: "The 8 best landing page builders, reviewed",
        Author: "Fredric Färholt",
        TimeToRead: "4",
        Image: {
          data: {
            attributes: {
              url: "/uploads/chat_plugins_fec5a66f84.webp",
            },
          },
        },
      },
      {
        Date: "2025-05-01",
        Header: "The 8 best landing page builders, reviewed",
        Author: "Fredric Färholt",
        TimeToRead: "4",
        Image: {
          data: {
            attributes: {
              url: "/uploads/dall_e_2_update_603244c729.webp",
            },
          },
        },
      },
      {
        Date: "2025-05-01",
        Header: "The 8 best landing page builders, reviewed",
        Author: "Fredric Färholt",
        TimeToRead: "4",
        Image: {
          data: {
            attributes: {
              url: "/uploads/improving_mathematical_reasoning_with_process_supervision_5d50e6fabb.webp",
            },
          },
        },
      },
    ],
  }}
/>
