// Hospedagem Brasil - Desktop Page
// Generated from Figma: https://www.figma.com/design/1VNZKolIv25BbgQlu8XmNN/Hospedagem-Brasil?node-id=298-449

// Assets (valid for 7 days from generation)
const imgLogo = "https://www.figma.com/api/mcp/asset/84a00502-0a6e-4f43-9e7a-38b685c5a47d";
const imgMiUser = "https://www.figma.com/api/mcp/asset/bef5706c-ad0a-4e33-bde9-120c8dfaaa5c";
const imgGiftIcon = "https://www.figma.com/api/mcp/asset/c52a4cfe-ed35-4539-8c88-5aac0c56d1c7";
const imgWalletIcon = "https://www.figma.com/api/mcp/asset/6907b02a-ec30-40d2-99e3-5dfd9f89d4f0";
const imgSearchIcon = "https://www.figma.com/api/mcp/asset/0de1e0aa-fc21-4638-bbb0-0fbd0876928f";
const imgSearchIconDark = "https://www.figma.com/api/mcp/asset/61b755df-23aa-49b3-88c4-e585db1af9f5"; // search (gray)
const imgFilterIcon = "https://www.figma.com/api/mcp/asset/d8871cf7-2515-443a-9f7b-f9e0402fe24d";
const imgDateIcon = "https://www.figma.com/api/mcp/asset/f7fc567b-7a25-4d1f-bb5c-793d7f8a3ab7";
const imgChevronDown = "https://www.figma.com/api/mcp/asset/517bd07f-2386-456e-9f51-fa9a22a193a6";
const imgGuestIcon = "https://www.figma.com/api/mcp/asset/f247dc4f-13f5-4229-ba78-a2fe2d04a844";
const imgMapIcon = "https://www.figma.com/api/mcp/asset/47b6aa27-fc3a-48c7-8d6f-ba05810276f8";
const imgStarIcon = "https://www.figma.com/api/mcp/asset/65f6f833-4803-4dc3-80b1-c9f82acb98e3";
const imgCarouselDots1 = "https://www.figma.com/api/mcp/asset/b5423fd2-34a3-48e6-8aa8-efcdd36b29f2";
const imgCarouselDots2 = "https://www.figma.com/api/mcp/asset/5c786eb7-271c-439a-abd9-3d38e6f34527";
const imgCarouselDots3 = "https://www.figma.com/api/mcp/asset/0382b1f5-f3a3-48e2-a1de-6cfd5380ea13";

// Category icons
const iconPraia = "https://www.figma.com/api/mcp/asset/212329be-0a32-400a-895e-a7c1d6215480";
const iconHotel = "https://www.figma.com/api/mcp/asset/61b755df-23aa-49b3-88c4-e585db1af9f5";
const iconRisort = "https://www.figma.com/api/mcp/asset/0162dab3-60fe-44b4-8cf1-3166a222e616";
const iconMontanhas = "https://www.figma.com/api/mcp/asset/dad5ca26-1a32-4c02-970d-90b883cbaba7";
const iconTropical = "https://www.figma.com/api/mcp/asset/de4b5502-28ed-4195-821d-971268db0a25";
const iconNeve = "https://www.figma.com/api/mcp/asset/ce50d823-f2f5-4f10-8742-bad6ffbed8e9";
const iconPiscinas = "https://www.figma.com/api/mcp/asset/b2325906-5423-44d0-ad4c-f955de9ef3f0";
const iconInterior = "https://www.figma.com/api/mcp/asset/9e3ed165-c2d2-4164-bbd0-ebcb42865111";
const iconLago = "https://www.figma.com/api/mcp/asset/3c758fcb-d0c1-480a-bde1-44eb158e05bb";
const iconIlhas = "https://www.figma.com/api/mcp/asset/d91b7a94-ea8b-4102-8992-5c8acc41157c";
const iconEmAlta = "https://www.figma.com/api/mcp/asset/92458d42-fb95-4bf9-a269-aefb6bbe0768";
const iconNovidades = "https://www.figma.com/api/mcp/asset/1cc517cc-5ac9-43b9-a7aa-0ab1560b4b54";

// Property card images
const imgCard1 = "https://www.figma.com/api/mcp/asset/7380b8eb-a177-4c7e-acc3-ae2feb3fac61"; // Vila na Praia (risort)
const imgCard2 = "https://www.figma.com/api/mcp/asset/7dc4a6f4-551b-4c68-8701-0356f87d36d6"; // image
const imgCard3 = "https://www.figma.com/api/mcp/asset/4bc78bc6-e45e-4234-b6d6-46f36da03b45"; // Hotel intercontinental
const imgCard4 = "https://www.figma.com/api/mcp/asset/7395072c-1c18-4a61-9f57-67e5e044b1d4"; // Suíte Hotel
const imgCard5 = "https://www.figma.com/api/mcp/asset/20b06b69-1095-4e42-83cf-177206ae790e"; // Vila na Praia 2
const imgCard6 = "https://www.figma.com/api/mcp/asset/adf9fef7-8cb2-4f10-b576-c2b01fcb7697"; // image1
const imgCard7 = "https://www.figma.com/api/mcp/asset/97cbf440-7dd2-4d3e-b280-b8431a91fa64"; // image5
const imgCard8 = "https://www.figma.com/api/mcp/asset/4456677c-005a-4d90-be73-32e63d5fd4b2"; // image group9

// ─────────────────────────────────────────
// Types
// ─────────────────────────────────────────

interface PropertyCard {
  id: number;
  image: string;
  dotsImage: string;
  title: string;
  price: string;
  rating: number;
  location: string;
  dates: string;
}

interface Category {
  label: string;
  icon: string;
  active?: boolean;
}

// ─────────────────────────────────────────
// Data
// ─────────────────────────────────────────

const categories: Category[] = [
  { label: "Praia", icon: iconPraia },
  { label: "Hotel", icon: iconHotel, active: true },
  { label: "Risort", icon: iconRisort },
  { label: "Montanhas", icon: iconMontanhas },
  { label: "Tropical", icon: iconTropical },
  { label: "Neve", icon: iconNeve },
  { label: "Piscinas", icon: iconPiscinas },
  { label: "No interior", icon: iconInterior },
  { label: "No Lago", icon: iconLago },
  { label: "Ilhas", icon: iconIlhas },
  { label: "Em Alta", icon: iconEmAlta },
  { label: "Novidades", icon: iconNovidades },
];

const properties: PropertyCard[] = [
  { id: 1, image: imgCard1, dotsImage: imgCarouselDots1, title: "Vila na Praia em Recife", price: "R$ 340 Total", rating: 4.8, location: "Recife/PE", dates: "18-23 DEZ" },
  { id: 2, image: imgCard3, dotsImage: imgCarouselDots2, title: "Hotel intercontinental", price: "R$ 340 Total", rating: 4.8, location: "Recife/PE", dates: "18-23 DEZ" },
  { id: 3, image: imgCard4, dotsImage: imgCarouselDots3, title: "Suíte Hotel Presidente", price: "R$ 1240 Total", rating: 4.8, location: "Recife/PE", dates: "18-23 DEZ" },
  { id: 4, image: imgCard5, dotsImage: imgCarouselDots2, title: "Vila na Praia em Recife", price: "R$ 340 Total", rating: 4.8, location: "Recife/PE", dates: "18-23 DEZ" },
  { id: 5, image: imgCard2, dotsImage: imgCarouselDots1, title: "Vila na Praia em Recife", price: "R$ 340 Total", rating: 4.8, location: "Recife/PE", dates: "18-23 DEZ" },
  { id: 6, image: imgCard6, dotsImage: imgCarouselDots3, title: "Hotel intercontinental", price: "R$ 340 Total", rating: 4.8, location: "Recife/PE", dates: "18-23 DEZ" },
  { id: 7, image: imgCard7, dotsImage: imgCarouselDots2, title: "Suíte Hotel Presidente", price: "R$ 1240 Total", rating: 4.8, location: "Recife/PE", dates: "18-23 DEZ" },
  { id: 8, image: imgCard8, dotsImage: imgCarouselDots1, title: "Vila na Praia em Recife", price: "R$ 340 Total", rating: 4.8, location: "Recife/PE", dates: "18-23 DEZ" },
];

// ─────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────

function Navbar() {
  return (
    <div className="bg-white shadow-[0px_2px_15.6px_0px_rgba(0,0,0,0.09)] px-[70px] py-4 flex items-center justify-between">
      {/* Logo */}
      <img src={imgLogo} alt="5S Hospedagem" className="h-[50px] w-[179px] object-contain" />

      {/* User Info */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-[9px]">
          {/* Avatar */}
          <div className="bg-[#e8e8f3] rounded-full size-[45px] flex items-center justify-center">
            <img src={imgMiUser} alt="User" className="size-6" />
          </div>

          {/* Name + badges */}
          <div className="flex flex-col gap-1">
            <span className="font-['Amiko',sans-serif] text-[#575757] text-[18px] tracking-[-0.72px] leading-none">
              Olá Josué Ribeiro
            </span>
            <div className="flex gap-1">
              {/* Points badge */}
              <div
                className="flex items-center gap-1 px-[3.6px] py-[3.6px] rounded-full"
                style={{ background: "linear-gradient(128deg, #0000ff 6.8%, #00ccff 118.58%)" }}
              >
                <img src={imgGiftIcon} alt="" className="size-[13px]" />
                <span className="font-['Amiko',sans-serif] text-white text-[11.6px] tracking-[-0.46px] pr-1">
                  1250 Pontos
                </span>
              </div>
              {/* Wallet badge */}
              <div className="bg-[#35a218] flex items-center gap-1 px-[3.6px] py-[3.6px] rounded-full w-20">
                <img src={imgWalletIcon} alt="" className="size-[14px]" />
                <span className="font-['Amiko',sans-serif] text-white text-[11.6px] tracking-[-0.46px]">
                  R$ 120,00
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Hamburger */}
        <button className="bg-white rounded-[15px] shadow-[0px_2px_15.6px_0px_rgba(0,0,0,0.09)] size-[45px] flex flex-col items-center justify-center gap-[3px] px-[10px] py-[7px]">
          <span className="bg-[#575757] h-[3px] w-[21px] rounded-full" />
          <span className="bg-[#575757] h-[3px] w-[21px] rounded-full" />
          <span className="bg-[#575757] h-[3px] w-[21px] rounded-full" />
        </button>
      </div>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="flex items-center gap-4 justify-center mt-8">
      {/* Para onde */}
      <button className="bg-white rounded-[15px] shadow-[0px_2px_15.6px_0px_rgba(0,0,0,0.09)] h-[52px] w-[279px] flex items-center gap-1 pl-2 pr-5 py-[9px]">
        <img src={imgSearchIconDark} alt="" className="size-[18px]" />
        <span className="font-['Amiko',sans-serif] font-semibold text-[#575757] text-[14px] tracking-[-0.56px]">
          Para onde?
        </span>
      </button>

      {/* Dates */}
      <div className="bg-white rounded-[15px] shadow-[0px_2px_15.6px_0px_rgba(0,0,0,0.09)] h-[52px] w-[313px] flex items-center pl-2 pr-5 py-[9px] gap-3">
        {/* Check in */}
        <div className="flex items-center justify-between flex-1">
          <div className="flex items-center gap-[2px]">
            <img src={imgDateIcon} alt="" className="w-[18px] h-[20px]" />
            <span className="font-['Amiko',sans-serif] font-semibold text-[#575757] text-[14px] tracking-[-0.56px]">
              Check in
            </span>
          </div>
          <img src={imgChevronDown} alt="" className="w-4 h-[9px]" />
        </div>
        <div className="bg-[#ccc] w-[2px] h-full rounded-[10px]" />
        {/* Check out */}
        <div className="flex items-center justify-between flex-1">
          <div className="flex items-center gap-[2px]">
            <img src={imgDateIcon} alt="" className="w-[18px] h-[20px]" />
            <span className="font-['Amiko',sans-serif] font-semibold text-[#575757] text-[14px] tracking-[-0.56px]">
              Check out
            </span>
          </div>
          <img src={imgChevronDown} alt="" className="w-4 h-[9px]" />
        </div>
      </div>

      {/* Quem vai */}
      <div className="bg-white rounded-[15px] shadow-[0px_2px_15.6px_0px_rgba(0,0,0,0.09)] h-[52px] w-[210px] flex items-center justify-between pl-2 pr-5 py-[9px]">
        <div className="flex items-center gap-[2px]">
          <img src={imgGuestIcon} alt="" className="size-5" />
          <span className="font-['Amiko',sans-serif] font-semibold text-[#575757] text-[14px] tracking-[-0.56px]">
            Quem vai
          </span>
        </div>
        <img src={imgChevronDown} alt="" className="w-4 h-[9px]" />
      </div>

      {/* Search button */}
      <button className="bg-[#000899] rounded-[15px] shadow-[0px_2px_15.6px_0px_rgba(0,0,0,0.09)] size-[49px] flex items-center justify-center">
        <img src={imgSearchIcon} alt="Buscar" className="size-[23px]" />
      </button>

      {/* Filter button */}
      <button className="bg-white rounded-[15px] shadow-[0px_2px_15.6px_0px_rgba(0,0,0,0.09)] size-[49px] flex items-center justify-center">
        <img src={imgFilterIcon} alt="Filtros" className="size-6" />
      </button>
    </div>
  );
}

function CategoryTabs() {
  return (
    <div className="px-[70px] mt-6 flex items-center justify-between border-b border-[#d9d9d9] pb-2">
      <div className="flex items-center gap-6">
        {categories.map((cat) => (
          <button
            key={cat.label}
            className={`flex flex-col items-center gap-[5px] w-16 pb-2 ${
              cat.active
                ? "border-b-2 border-[#161616]"
                : ""
            }`}
          >
            <img src={cat.icon} alt={cat.label} className="size-8" />
            <span
              className={`font-['Amiko',sans-serif] text-[12px] tracking-[-0.48px] text-center whitespace-nowrap ${
                cat.active ? "text-[#161616]" : "text-[#767676]"
              }`}
            >
              {cat.label}
            </span>
          </button>
        ))}
      </div>

      {/* Acessar Mapa */}
      <button className="bg-white rounded-[15px] shadow-[0px_2px_15.6px_0px_rgba(0,0,0,0.09)] h-[49px] w-[147px] flex items-center gap-2 px-[10px] py-[7px]">
        <img src={imgMapIcon} alt="Mapa" className="size-7" />
        <span className="font-['Amiko',sans-serif] text-[#767676] text-[12px] tracking-[-0.48px]">
          Acessar Mapa
        </span>
      </button>
    </div>
  );
}

function PropertyCardItem({ card }: { card: PropertyCard }) {
  return (
    <div className="bg-white rounded-[15px] shadow-[0px_2px_15.6px_0px_rgba(0,0,0,0.09)] overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
      {/* Image */}
      <div className="relative h-[267px]">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-full object-cover rounded-t-[15px]"
        />
        {/* Carousel dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
          <img src={card.dotsImage} alt="" className="h-[7px]" />
        </div>
      </div>

      {/* Info */}
      <div className="px-[10px] pt-[14px] pb-[16px]">
        {/* Title row */}
        <div className="flex items-start justify-between mb-1">
          <h3 className="font-['Amiko',sans-serif] font-bold text-[#3d3d3d] text-[18px] tracking-[-0.72px] leading-tight">
            {card.title}
          </h3>
          <div className="flex items-center gap-[3px] shrink-0">
            <img src={imgStarIcon} alt="Rating" className="size-[16.7px]" />
            <span className="font-['Amiko',sans-serif] font-bold text-[#3d3d3d] text-[13.6px] tracking-[-0.55px]">
              {card.rating}
            </span>
          </div>
        </div>

        {/* Location + dates */}
        <div className="flex items-center gap-2 mb-[10px]">
          <span className="font-['Amiko',sans-serif] text-[#838383] text-[14px] tracking-[-0.56px]">
            {card.location}
          </span>
          <div className="bg-[#e3e3e3] h-[15px] w-[3px] rounded-full" />
          <span className="font-['Amiko',sans-serif] text-[#838383] text-[14px] tracking-[-0.56px]">
            {card.dates}
          </span>
        </div>

        {/* Price */}
        <span className="font-['Amiko',sans-serif] font-bold text-[#446289] text-[14px] tracking-[-0.56px]">
          {card.price}
        </span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────

export default function HospedagemBrasil() {
  return (
    <div className="bg-[#f5fafb] min-h-screen font-['Amiko',sans-serif]">
      <Navbar />
      <SearchBar />
      <CategoryTabs />

      {/* Properties grid */}
      <div className="px-[70px] py-8 grid grid-cols-4 gap-6">
        {properties.map((card) => (
          <PropertyCardItem key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
