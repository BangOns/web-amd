interface ILinkNav {
  link: string;
  name: string;
}

interface IListSosialMedia {
  link: string;
  name: string;
  icon: keyof typeof icons;
}
interface ITextSejarahProfile {
  id: number;
  text: string;
}

interface IListPerintis {
  name: string;
  jabatan: string;
  image: StaticImageData;
}
