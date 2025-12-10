// seed.js — 100 custom reasons with pet names like Vituu, Jaadu, Bholu.
import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import Reason from "./models/Reason.js";

const REASONS = [

  { text: "Aap jab hastae ho na Vituu… dil literally melt ho jaata hai." },
  { text: "Aapki aankhon me jo chamak hoti hai, wo mere din ka highlight ban jaati hai." },
  { text: "Aap ki ‘haan bolo?’ wali voice se hi tension half ho jaati hai." },
  { text: "Aap jab thoda nakhre dikhate ho… bas mann karta hai aur pamper karu." },
  { text: "Aapka thoda sa bhi pyaar… overthinking ko chutti de deta hai." },
  { text: "Aap ka ‘bholu mode’ itna cute hota hai ki main hass ke pagal ho jaata hoon." },
  { text: "Aap mujhe bina bole samajh jaate ho. Ye superpower hai kya?" },
  { text: "Aapki hasi ka sound… asli dopamine dose hai." },
  { text: "Aap jab jealous hote ho, bas mujhe hug karne ka mann karta hai." },
  { text: "Aapka ‘oye suno?’ = mere liye VIP notification." },

  { text: "Aap mere liye comfort person ho, chahe aap maana ya na maana." },
  { text: "Aap random memes bhejte ho aur mera pura mood shift ho jaata hai." },
  { text: "Aapke saath call pe rehna feels like ghar pe hoon." },
  { text: "Aap rooth jaate ho toh extra cute lagte ho, sach me." },
  { text: "Aapka thoda sa attention bhi overthinking ka the-end kar deta hai." },
  { text: "Aapki goodnight messages ek warmth jaisi feel hoti hain." },
  { text: "Aap bholu ho par dangerous bhi, perfect combo." },
  { text: "Aap shy ho jaate ho compliments pe… aur main khush ho jaata hoon." },
  { text: "Aap mujhe roast karte ho par pyaar se — best type of roasting." },
  { text: "Aap jab ‘hm?’ kehte ho, usme 25 meanings hoti hain — only I can decode." },

  { text: "Aap thoda serious hoke cute lagne lagte ho. Ye kaise possible hai?" },
  { text: "Aap jab mujhe sunte ho, lagta hai duniya thodi easy hai." },
  { text: "Aapki silly baatein mera din bright kar deti hain." },
  { text: "Aap kabhi kabhi toh itne adorable lagte ho ki main literally speechless." },
  { text: "Aapka thoda possessive hona — cute level 100." },
  { text: "Aap random facts bolte ho aur mujhe pasand aa jaate ho fir se." },
  { text: "Aapki aankhein… matlab unnecessarily pretty hain." },
  { text: "Aap jab meri side lete ho, main 10x confident feel karta hoon." },
  { text: "Aapka soft ‘hello’ mere din ka best moment hota hai." },
  { text: "Aap thoda pyaar se mere naam ko bolte ho… bas dil udhar hi reh jaata hai." },

  { text: "Aapka silent treatment bhi soft hota hai — kitne cute ho yaar." },
  { text: "Aap jab confused hote ho, bholu lagte ho." },
  { text: "Aap mujhe bina reason smile karwa dete ho." },
  { text: "Aapki overthinking ka end main hoon — aur mujhe ye role pasand hai." },
  { text: "Aap jab milte ho toh environment hi better lagta hai." },
  { text: "Aapki aankhon me haalki si sharaarat hoti hai — iconic." },
  { text: "Aap thoda sa bhi compliment doge toh mera din ban jaata." },
  { text: "Aap ka ‘haan chalega’ attitude mujhe bohot soothe karta hai." },
  { text: "Aap random cheezein yaad rakhte ho mere baare me — ye sabse sweet hai." },
  { text: "Aap mere liye sirf important nahi… priority ho." },

  { text: "Aap jab text slow kar dete ho, mujhe lagta hai blush kar rahe ho." },
  { text: "Aapki baatein cuddly feel karwati hain, even screen pe." },
  { text: "Aap jab thoda attitude dikhate ho, wo bhi cute hi lagta hai." },
  { text: "Aap mujhe safe mehsoos karwate ho — emotionally bhi." },
  { text: "Aap ki ‘hmm’ wali voice over romantic hoti hai kabhi kabhi." },
  { text: "Aap jab thoda sa naraz hote ho, mann karta turant mana loon." },
  { text: "Aap memes samajhne me bhi intelligent ho, rare quality." },
  { text: "Aap ka sense of humor underrated gem hai." },
  { text: "Aapke sath hanste hanste time vanish ho jaata hai." },
  { text: "Aap mujhe calm karte ho bina effort ke — kya magic hai Jaadu?" },

  { text: "Aap jab khana share karte ho, mujhe pyaar dikhta hai." },
  { text: "Aap bholu ho but smart ho — dangerous mix." },
  { text: "Aap jab ‘kya hua?’ poochte ho, mujhe feel hota ki koi genuinely care karta." },
  { text: "Aapka baby voice occasionally bahut cute hota hai." },
  { text: "Aap jab thoda clingy hote ho… I love that version of you." },
  { text: "Aapka thoda sa concern bhi bohot precious feel hota hai." },
  { text: "Aap mujhe comfortable banate ho to open up." },
  { text: "Aap mere liye unintentionally funny ho." },
  { text: "Aap apni baaton me khud confuse ho jaate ho — adorable." },
  { text: "Aap first try me hi mere mood swings samajh jaate ho." },

  { text: "Aap mujhe better insan banne ka mann kara dete ho." },
  { text: "Aapki softness world me kam hi milti hai." },
  { text: "Aap jab mujhe call karte ho… sab distractions off ho jaate." },
  { text: "Aap petty ho kabhi kabhi — but cute petty." },
  { text: "Aapka thoda sa bhi affection bohot powerful hota hai." },
  { text: "Aap ki teasing — irritating nahi, romantic lagti hai." },
  { text: "Aap kabhi kabhi bina wajah blush karte ho. I notice." },
  { text: "Aap jab happy hote ho, meri chest literally warm ho jaati hai." },
  { text: "Aap thoda vulnerable hote ho mujhse — trust dikhta hai." },
  { text: "Aap jaise ho, waise hi perfect ho mere liye." },

  { text: "Aapki energy kabhi kabhi goofy hoti hai — aur mujhe woh version sabse zyada pasand." },
  { text: "Aap ke saath sakht insaan bhi soft ho jaaye." },
  { text: "Aap mujhe bilkul ghar jaisi feeling dete ho." },
  { text: "Aap ka ‘haan haan theek hai’ tone mujhe hasaa deta hai." },
  { text: "Aap mere stupid jokes pe bhi smile kar dete ho." },
  { text: "Aapka little bit of drama — entertaining AF." },
  { text: "Aap cute lagte ho jab explanation dene lag jaate ho." },
  { text: "Aap bina reason mujhe yaad karte ho — and that’s sweet." },
  { text: "Aap chahe jitna bhi deny karo… aap pyaare ho." },
  { text: "Aap ho isliye mere din me warmth hoti hai." },

  { text: "Aap mere liye overthinking ka pause button ho." },
  { text: "Aap jab smile se aankhein bandh karte ho — lethal moment." },
  { text: "Aap ka thoda sa bhi compliment pure day ko glow-up de deta." },
  { text: "Aap emotionally intelligent ho — rare, precious." },
  { text: "Aap literally meri comfort zone ho." },
  { text: "Aap bholu ho but jab smart bante ho na — chef's kiss." },
  { text: "Aap jab mujhe suna dete ho softly, pyaar aur zyada lagta hai." },
  { text: "Aap apna opinion honestly dete ho — love that." },
  { text: "Aap ke saath mujhe kabhi pretend nahi karna padta." },
  { text: "Aap mere liye special ho. Bohot hi zyada." }

];

const seed = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      console.error("❌ MONGO_URI missing in .env");
      process.exit(1);
    }

    await mongoose.connect(uri);
    console.log("🌸 Connected to MongoDB");

    await Reason.deleteMany({});
    console.log("🗑️ Cleared existing reasons");

    await Reason.insertMany(REASONS);
    console.log(`💖 Inserted ${REASONS.length} reasons`);

    console.log("✨ Seeding complete!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Seeding error:", err);
    process.exit(1);
  }
};

seed();
