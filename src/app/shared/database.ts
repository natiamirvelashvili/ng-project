import { Book } from "./models/book-model";
import { City } from "./models/city-model";
import { User } from "./models/user-model";
  
  interface Database {
    cities: City[];
    users: User[];
    books: Book[];
  }
  
  // Usage example
  export const db: Database = {
    cities: [
      {
        "name": "Tbilisi"
      },
      {
        "name": "Gurjaani"
      },
      {
        "name": "Signagi"
      },
      {
        "name": "Tibaani"
      },
      {
        "name": "Batumi"
      },
      {
        "name": "Qutaisi"
      },
      {
        "name": "Rustavi"
      }
    ],
    users: [
      {
        id: 0,
        name: "a",
        surname: "a",
        email: "lashagelovani@gmail.com",
        password: "123",
        city: "city 1",
      },
    ],
    books: [
      {
        "id": "0",
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "type": "sale",
        "price": 25.90,
        "description": "One of the most cherished stories of all time, To Kill a Mockingbird has been translated into more than forty languages, sold more than forty million copies worldwide, served as the basis for an enormously popular motion picture, and was voted one of the best novels of the twentieth century by librarians across the country. A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice, it views a world of great beauty and savage inequities through the eyes of a young girl, as her father--a crusading local lawyer--risks everything to defend a black man unjustly accused of a terrible crime.",
        "address": "Tbilisi, 2 Sulkhan Tsintsadze St.",
        "email": "giorgigiorgadze@gmail.com",
        "imageUrl": "https://m.media-amazon.com/images/I/51IXWZzlgSL._SX330_BO1,204,203,200_.jpg",
        "status": "enabled"
      },
      {
        "id": "1",
        "title": "Shakespeare-sonnets",
        "author": "William Shakespeare",
        "type": "sale",
        "price": 40.90,
        "address": "Tbilisi",
        "email": "niniruadze@gmail.com",
        "status": "enabled",
        "imageUrl": "https://m.media-amazon.com/images/I/51zw3dGo5FL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
        "description": "How can we look afresh at Shakespeare as a writer of sonnets? What new light might they shed on his career, personality, and sexuality? Shakespeare wrote sonnets for at least thirty years, not only for himself, for professional reasons, and for those he loved, but also in his plays, as prologues, as epilogues, and as part of their poetic texture. This ground-breaking book assembles all of Shakespeare's sonnets in their probable order of composition. An inspiring introduction debunks long-established biographical myths about Shakespeare's sonnets and proposes new insights about how and why he wrote them. Explanatory notes and modern English paraphrases of every poem and dramatic extract illuminate the meaning of these sometimes challenging but always deeply rewarding witnesses to Shakespeare's inner life and professional expertise. Beautifully printed and elegantly presented, this volume will be treasured by students, scholars, and every Shakespeare enthusiast."
      },
      {
        "id": "2",
        "title": "Little Women",
        "author": "Louisa May Alcott ",
        "type": "sale",
        "price": 55.95,
        "address": "Tbilisi,2 Sulkhan Tsintsadze St. ",
        "email": "salomeungiadze@gmail.com",
        "status": "enabled",
        "imageUrl": "https://m.media-amazon.com/images/I/51hKzIW4dzL._SX322_BO1,204,203,200_.jpg",
        "description": "For generations, children around the world have come of age with Louisa May Alcott's March girls: hardworking eldest sister Meg, headstrong, impulsive Jo, timid Beth, and precocious Amy. With their father away at war, and their loving mother Marmee working to support the family, the four sisters have to rely on one another for support as they endure the hardships of wartime and poverty. We witness the sisters growing up and figuring out what role each wants to play in the world, and, along the way, join them on countless unforgettable adventures."
      },
      {
        "id": "3",
        "title": "The Three Musketeers",
        "author": "Alexandre Dumas ",
        "type": "sale",
        "price": 33.90,
        "status": "enabled",
        "imageUrl": "https://m.media-amazon.com/images/I/41TxXqToCCL._SX348_BO1,204,203,200_.jpg",
        "description": "The Three Musketeers is a novel by Alexandre Dumas. Set in the 17th century, it recounts the adventures of a young man named d'Artagnan after he leaves home to travel to Paris, to join the Musketeers of the Guard. D'Artagnan is not one of the musketeers of the title; those being his friends Athos, Porthos and Aramis, inseparable friends who live by the motto all for one, one for all, a motto which is first put forth by d'Artagnan. In genre, The Three Musketeers is primarily a historical novel and adventure. However Dumas also frequently works into the plot various injustices, abuses and absurdities of the ancien regime, giving the novel an additional political aspect at a time when the debate in France between republicans and monarchists was still fierce. The story was first serialized from March to July 1844, during the July monarchy, four years before the French Revolution of 1848 violently established the second Republic. The author's father, Thomas-Alexandre Dumas had been a well-known general in France's Republican army during the French revolutionary wars. Although adaptations tend to portray d'Artagnan and the three musketeers as heroes, the novel portrays less appealing characters, who are willing to commit violence over slight insults and through unquestioning loyalty to the king and queen, and treat their servants and supposed social inferiors with contempt and violence.",
        "address": "Gurjaani, Noneshvili st.67",
        "email": "bookshop@gmail.com"
      },
      {
        "id": "4",
        "title": "The Adventures of Sherlock Holmes ",
        "author": "Sir Arthur Conan Doyle ",
        "type": "sale",
        "price": 49.90,
        "address": "Tbilisi, Chavchavadze ave.87",
        "email": "giorgigiorgadze@gmail.com",
        "status": "enabled",
        "imageUrl": "https://m.media-amazon.com/images/I/516dZVA7rQL._SX346_BO1,204,203,200_.jpg",
        "description": "The Adventures of Sherlock Holmes is a collection of twelve stories written by Arthur Conan Doyle, featuring his famous detective. Venture back in time to Victorian London to join literature's greatest detective team — the brilliant Sherlock Holmes and his devoted assistant, Dr. Watson — as they investigate a dozen of their best-known cases. Originally published in 1892, this is the first and best collection of stories about the legendary sleuth. It's also the least expensive edition available. "
      },
      {
        "id": "5",
        "title": "And Then There Were None ",
        "author": "Agatha Christie",
        "type": "sale",
        "price": 21.90,
        "description": "Ten people, each with something to hide and something to fear, are invited to an isolated mansion on Indian Island by a host who, surprisingly, fails to appear. On the island they are cut off from everything but each other and the inescapable shadows of their own past lives. One by one, the guests share the darkest secrets of their wicked pasts. And one by one, they die...Which among them is the killer and will any of them survive?",
        "address": "Gurjaani, Noneshvili st.67",
        "email": "niniruadze@gmail.com",
        "imageUrl": "https://m.media-amazon.com/images/P/0008123209.01._SCLZZZZZZZ_SX500_.jpg",
        "status": "enabled"
      },
      {
        "id": "6",
        "title": "The Haunting of Hill House",
        "author": "Shirley Jackson ",
        "type": "sale",
        "price": 18.90,
        "address": "Tbilisi, Chavchavadze ave.87",
        "email": "niasreseli@gmail.com",
        "status": "disabled",
        "imageUrl": "https://m.media-amazon.com/images/I/51JzXscpACL._SX324_BO1,204,203,200_.jpg",
        "description": "First published in 1959, Shirley Jackson's The Haunting of Hill House has been hailed as a perfect work of unnerving terror. It is the story of four seekers who arrive at a notoriously unfriendly pile called Hill House: Dr. Montague, an occult scholar looking for solid evidence of a haunting; Theodora, his lighthearted assistant; Eleanor, a friendless, fragile young woman well acquainted with poltergeists; and Luke, the future heir of Hill House. At first, their stay seems destined to be merely a spooky encounter with inexplicable phenomena. But Hill House is gathering its powers--and soon it will choose one of them to make its own."
      },
      {
        "id": "7",
        "title": "1984 ",
        "author": "George Orwell",
        "type": "sale",
        "price": 19.90,
        "description": "In 1984, London is a grim city in the totalitarian state of Oceania where Big Brother is always watching you and the Thought Police can practically read your mind. Winston Smith is a man in grave danger for the simple reason that his memory still functions. Drawn into a forbidden love affair, Winston finds the courage to join a secret revolutionary organization called The Brotherhood, dedicated to the destruction of the Party. Together with his beloved Julia, he hazards his life in a deadly match against the powers that be.",
        "address": "Gurjaani, Noneshvili st.67",
        "email": "giga@gmail.com",
        "imageUrl": "https://m.media-amazon.com/images/I/31m5scSLXkL._SX331_BO1,204,203,200_.jpg",
        "status": "enabled"
      },
      {
        "id": "8",
        "title": "The Hunger Games Complete Trilogy",
        "author": "Suzanne Collins",
        "type": "gift",
        "price": 59.90,
        "address": "Tbilisi, Chavchavadze ave.87",
        "email": "giorgigiorgadze@gmail.com",
        "status": "enabled",
        "imageUrl": "https://m.media-amazon.com/images/I/41MgqKIRJSL.jpg",
        "description": "Set in a dark vision of the near future, a terrifying reality TV show is taking place.Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence.But Katniss has been close to death before. For her, survival is second nature."
      },
      {
        "id": "9",
        "title": "The Queen of Hearts",
        "author": "Kimmery Martin ",
        "type": "gift",
        "price": 10.90,
        "address": "Tbilisi, Chavchavadze ave.87",
        "email": "giga@gmail.com",
        "status": "disabled",
        "imageUrl": "https://m.media-amazon.com/images/I/510l4sOTEiL._SX331_BO1,204,203,200_.jpg",
        "description": "Zadie Anson and Emma Colley have been best friends since their early twenties, when they first began navigating serious romantic relationships amid the intensity of medical school. Now they're happily married wives and mothers with successful careers--Zadie as a pediatric cardiologist and Emma as a trauma surgeon. Their lives in Charlotte, North Carolina, are chaotic but fulfilling, until the return of a former colleague unearths a secret one of them has been harboring for years."
      },
      {
        "id": "10",
        "title": "Frida: A Biography of Frida Kahlo",
        "author": "Hayden Herrera ",
        "type": "gift",
        "price": 18.90,
        "description": "Hailed by readers and critics across the country, this engrossing biography of Mexican painter Frida Kahlo reveals a woman of extreme magnetism and originality, an artist whose sensual vibrancy came straight from her own experiences: her childhood near Mexico City during the Mexican Revolution; a devastating accident at age eighteen that left her crippled and unable to bear children; her tempestuous marriage to muralist Diego Rivera and intermittent love affairs with men as diverse as Isamu Noguchi and Leon Trotsky; her association with the Communist Party; her absorption in Mexican folklore and culture; and her dramatic love of spectacle.",
        "address": "Gurjaani, Noneshvili st.67",
        "email": "salomeungiadze@gmail.com",
        "imageUrl": "https://m.media-amazon.com/images/I/41eTmAgSaXL._SX329_BO1,204,203,200_.jpg",
        "status": "enabled"
      },
      {
        "id": "11",
        "title": "I Know Why the Caged Bird Sings Paperback",
        "author": "Maya Angelou Dr.",
        "type": "gift",
        "price": 15.90,
        "address": "Tbilisi, 2 Sulkhan Tsintsadze St.",
        "email": "salomeungiadze@gmail.com",
        "status": "enabled",
        "imageUrl": "https://m.media-amazon.com/images/I/41ErZeP9ROL._SX342_BO1,204,203,200_.jpg",
        "description": "Here is a book as joyous and painful, as mysterious and memorable, as childhood itself. I Know Why the Caged Bird Sings captures the longing of lonely children, the brute insult of bigotry, and the wonder of words that can make the world right. Maya Angelou's debut memoir is a modern American classic beloved worldwide."
      },
      {
        "id": "12",
        "title": "EVERY THING IS F*CKED: A BOOK ABOUT HOPE",
        "author": "Mark Manson ",
        "type": "gift",
        "price": 16.90,
        "address": "Tbilisi, 2 Sulkhan Tsintsadze St.",
        "email": "lashagelovani@gmail.com",
        "status": "enabled",
        "imageUrl": "https://m.media-amazon.com/images/I/416T7uchqcL._SX329_BO1,204,203,200_.jpg",
        "description": "We live in an interesting time. Materially, everything is the best it’s ever been—we are freer, healthier and wealthier than any people in human history. Yet, somehow everything seems to be irreparably and horribly f*cked—the planet is warming, governments are failing, economies are collapsing, and everyone is perpetually offended on Twitter. At this moment in history, when we have access to technology, education and communication our ancestors couldn’t even dream of, so many of us come back to an overriding feeling of hopelessness.What’s going on? If anyone can put a name to our current malaise and help fix it, it’s Mark Manson. In 2016, Manson published The Subtle Art of Not Giving A F*ck, a book that brilliantly gave shape to the ever-present, low-level hum of anxiety that permeates modern living. He showed us that technology had made it too easy to care about the wrong things, that our culture had convinced us that the world owed us something when it didn’t—and worst of all, that our modern and maddening urge to always find happiness only served to make us unhappier. Instead, the “subtle art” of that title turned out to be a bold challenge: to choose your struggle; to narrow and focus and find the pain you want to sustain. The result was a book that became an international phenomenon, selling millions of copies worldwide while becoming the #1 bestseller in 13 different countries."
      },
      {
        "id": "13",
        "title": "The Collected Poems (Harper Perennial Modern Classics)",
        "author": "Sylvia Plath ",
        "type": "gift",
        "price": 18.90,
        "description": "By the time of her death on 11, February 1963, Sylvia Plath had written a large bulk of poetry. To my knowledge, she never scrapped any of her poetic efforts. With one or two exceptions, she brought every piece she worked on to some final form acceptable to her, rejecting at most the odd verse, or a false head or a false tail. Her attitude to her verse was artisan-like: if she couldn't get a table out of the material, she was quite happy to get a chair, or even a toy. The end product for her was not so much a successful poem, as something that had temporarily exhausted her ingenuity. ",
        "address": "city 3",
        "email": "giorgigiorgadze@gmail.com",
        "imageUrl": "https://m.media-amazon.com/images/I/41nPVatnIvL._SX328_BO1,204,203,200_.jpg",
        "status": "enabled"
      },
      {
        "id": "14",
        "title": "The Sun and Her Flowers: Rupi Kaur ",
        "author": "Rupi Kaur",
        "type": "gift",
        "price": 26.90,
        "description": "From Rupi Kaur, the bestselling author of Milk and Honey, comes her long-awaited second collection of poetry. Illustrated by Kaur, The Sun and Her Flowers is a journey of wilting, falling, rooting, rising and blooming. It is a celebration of love in all its forms.",
        "address": "Gurjaani, Noneshvili st.67",
        "email": "niniruadze@gmail.com",
        "imageUrl": "https://m.media-amazon.com/images/I/41HAad9oZdL._SX328_BO1,204,203,200_.jpg",
        "status": "enabled"
      },
      {
        "id": "15",
        "title": "Becoming: Michelle Obama",
        "author": " Michelle Obama ",
        "type": "exchange",
        "price": 7.90,
        "address": "Tbilisi, 2 Sulkhan Tsintsadze St.",
        "email": "niasreseli@gmail.com",
        "status": "disabled",
        "imageUrl": "https://m.media-amazon.com/images/I/41FOmpuoJgL._SX326_BO1,204,203,200_.jpg",
        "description": "An intimate, powerful, and inspiring memoir by the former First Lady of the United States In a life filled with meaning and accomplishment, Michelle Obama has emerged as one of the most iconic and compelling women of our era. As First Lady of the United States of America--the first African American to serve in that role--she helped create the most welcoming and inclusive White House in history, while also establishing herself as a powerful advocate for women and girls in the U.S. and around the world, dramatically changing the ways that families pursue healthier and more active lives, and standing with her husband as he led America through some of its most harrowing moments. Along the way, she showed us a few dance moves, crushed Carpool Karaoke, and raised two down-to-earth daughters under an unforgiving media glare."
      },
      {
        "id": "16",
        "title": "The Glass Castle: A Memoir",
        "author": "Jeannette Walls",
        "type": "exchange",
        "price": 17.90,
        "address": "Tbilisi, 2 Sulkhan Tsintsadze St.",
        "email": "giorgigiorgadze@gmail.com",
        "status": "enabled",
        "imageUrl": "https://m.media-amazon.com/images/I/41SV07xgbNL._SX314_BO1,204,203,200_.jpg",
        "description": "The Glass Castle is a remarkable memoir of resilience and redemption, and a revelatory look into a family at once deeply dysfunctional and uniquely vibrant. When sober, Jeannette's brilliant and charismatic father captured his children's imagination, teaching them physics, geology, and how to embrace life fearlessly. But when he drank, he was dishonest and destructive. Her mother was a free spirit who abhorred the idea of domesticity and didn't want the responsibility of raising a family."
      },
      {
        "id": "17",
        "title": "My Favorite Double",
        "author": "Nino Kharatishvili",
        "type": "exchange",
        "price": 17.90,
        "address": "Tbilisi, Chavchavadze ave.87",
        "email": "giga@gmail.com",
        "status": "enabled",
        "imageUrl": "https://intelekti.ge/img-site/upload/books/thumb_3334498684.jpg",
        "description": "In 2011 the novel was awarded the Prize of the German Independent Publishers. It tells about a complicated relationships and painful love within a family. Stella, 26, is a professional working in Hamburg. She leads a relatively comfortable life with her family until her half-brother Iwo arrives after a lengthy absence. His appearance triggers highly emotional memories connected with their traumatic childhood."
      },
      {
        "id": "18",
        "title": "Me: Elton John Official Autobiography",
        "author": "Elton John",
        "type": "exchange",
        "price": 26.90,
        "description": "Christened Reginald Dwight, he was a shy boy with Buddy Holly glasses who grew up in the London suburb of Pinner and dreamed of becoming a pop star. By the age of twenty-three he was performing his first gig in America, facing an astonished audience in his bright yellow dungarees, a star-spangled T-shirt, and boots with wings. Elton John had arrived and the music world would never be the same again.",
        "address": "Gurjaani, Noneshvili st.67",
        "email": "niasreseli@gmail.com",
        "imageUrl": "https://m.media-amazon.com/images/I/41TJxOmPRjL._SX323_BO1,204,203,200_.jpg",
        "status": "enabled"
      },
      {
        "id": "19",
        "title": "Gone Girl",
        "author": "Gillian Flynn ",
        "type": "exchange",
        "price": 15.90,
        "address": "Tbilisi, Chavchavadze ave.87",
        "email": "giorgigiorgadze@gmail.com",
        "status": "enabled",
        "imageUrl": "https://m.media-amazon.com/images/I/41oR8CLl6lL._SX323_BO1,204,203,200_.jpg",
        "description": "On a warm summer morning in North Carthage, Missouri, it is Nick and Amy Dunne’s fifth wedding anniversary. Presents are being wrapped and reservations are being made when Nick’s clever and beautiful wife disappears. Husband-of-the-Year Nick isn’t doing himself any favors with cringe-worthy daydreams about the slope and shape of his wife’s head, but passages from Amy's diary reveal the alpha-girl perfectionist could have put anyone dangerously on edge. Under mounting pressure from the police and the media—as well as Amy’s fiercely doting parents—the town golden boy parades an endless series of lies, deceits, and inappropriate behavior. Nick is oddly evasive, and he’s definitely bitter—but is he really a killer? "
      },
      {
        "id": "20",
        "title": "The Mystery of the Blue Train",
        "author": "Agatha Christie",
        "type": "exchange",
        "price": 10.90,
        "address": "Tbilisi, 2 Sulkhan Tsintsadze St.",
        "email": "lashagelovani@gmail.com",
        "status": "enabled",
        "imageUrl": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ5KuVyuk4bw5E_BrufwvGUtyzpSPFiSG-Y7_AqWGWjg-QzX5us",
        "description": " Mrs. Kettering, an heiress, is murdered for priceless rubies as she travels on a train to meet her lover in France. Several people would have wanted her dead. Her husband stands to inherit her millions upon her death"
      },
      {
        "id": "21",
        "title": "This Is How You Lose Her",
        "author": "Junot Díaz",
        "type": "sale",
        "price": 9.90,
        "status": "enabled",
        "imageUrl": "https://m.media-amazon.com/images/I/51G2GGjeBjL._SX318_BO1,204,203,200_.jpg",
        "description": "On a beach in the Dominican Republic, a doomed relationship flounders. In a New Jersey laundry room, a woman does her lover's washing and thinks about his wife. In Boston, a man buys his love child, his only son, a first baseball bat and glove. At the heart of these stories is the irrepressible, irresistible Yunior, a young hardhead whose longing for love is equaled only by his recklessness--and by the extraordinary women he loves and loses.In prose that is endlessly energetic, inventive, tender, and funny, these stories l",
        "address": "Gurjaani, Noneshvili st.67",
        "email": "niniruadze@gmail.com"
      },
      {
        "id": "22",
        "title": "Ninth House: 1",
        "author": "Leigh Bardugo",
        "type": "sale",
        "price": 18.90,
        "status": "enabled",
        "imageUrl": "https://m.media-amazon.com/images/I/41cUxNtr5-L._SX326_BO1,204,203,200_.jpg",
        "description": "Galaxy “Alex” Stern is the most unlikely member of Yale’s freshman class. Raised in the Los Angeles hinterlands by a hippie mom, Alex dropped out of school early and into a world of shady drug-dealer boyfriends, dead-end jobs, and much, much worse. In fact, by age twenty, she is the sole survivor of a horrific, unsolved multiple homicide. Some might say she’s thrown her life away. But at her hospital bed, Alex is offered a second chance: to attend one of the world’s most prestigious universities on a full ride. What’s the catch, and why her?",
        "address": "city",
        "email": "niasreseli@gmail.com"
      },
      {
        "id": "23",
        "title": "The Call of the Wild ",
        "author": "Jack London ",
        "type": "exchange",
        "price": 33.90,
        "description": "The Call of the Wild is a novel by Jack London published in 1903. The story is set in the Yukon during the 1890s Klondike Gold Rush—a period in which strong sled dogs were in high demand. The novel's central character is a dog named Buck, a domesticated dog living at a ranch in the Santa Clara Valley of California as the story opens. Stolen from his home and sold into service as sled dog in Alaska, he reverts to a wild state. Buck is forced to fight in order to dominate other dogs in a harsh climate. Eventually he sheds the veneer of civilization, relying on primordial instincts and learned experience to emerge as a leader in the wild.London lived for most of a year in the Yukon collecting material for the book. The story was serialized in the Saturday Evening Post in the summer of 1903; a month later it was released in book form. The novel’s great popularity and success made a reputation for London. Much of its appeal derives from the simplicity of this tale of survival. As early as 1908 the story was adapted to film and it has since seen several more cinematic adaptations.",
        "address": "Gurjaani, Noneshvili st.67",
        "email": "giorgigiorgadze@gmail.com",
        "imageUrl": "https://m.media-amazon.com/images/I/41JNWeZqnsL._SX336_BO1,204,203,200_.jpg",
        "status": "disabled"
      },
      {
        "id": "24",
        "title": "Beloved",
        "author": "Toni Morrison ",
        "type": "sale",
        "price": 17.90,
        "description": "Sethe was born a slave and escaped to Ohio, but eighteen years later she is still not free. Sethe has too many memories of Sweet Home, the beautiful farm where so many hideous things happened. And Sethe's new home is haunted by the ghost of her baby, who died nameless and whose tombstone is engraved with a single word: Beloved.",
        "address": "Tbilisi, Chavchavadze ave.87",
        "email": "salomeungiadze@gmail.com",
        "imageUrl": "https://m.media-amazon.com/images/I/41Rdzbiqh7L._SX322_BO1,204,203,200_.jpg",
        "status": "enabled"
      },
      {
        "id": "25",
        "title": "The Boy, the Mole, the Fox and the Horse",
        "author": "Charlie Mackesy ",
        "type": "sale",
        "price": 14.90,
        "description": "Charlie Mackesy offers inspiration and hope in uncertain times in this beautiful book, following the tale of a curious boy, a greedy mole, a wary fox and a wise horse who find themselves together in sometimes difficult terrain, sharing their greatest fears and biggest discoveries about vulnerability, kindness, hope, friendship and love. The shared adventures and important conversations between the four friends are full of life lessons that have connected with readers of all ages.Read less",
        "address": "Tbilisi, 2 Sulkhan Tsintsadze St.",
        "email": "lashagelovani@gmail.com",
        "imageUrl": "https://m.media-amazon.com/images/I/418D9yYGB3L._SX369_BO1,204,203,200_.jpg",
        "status": "enabled"
      }
    ],
  };