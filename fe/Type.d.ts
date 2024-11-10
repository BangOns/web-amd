interface ILogin {
  idUser: string;
  password: string;
}
interface IRegister {
  idUser: string;
  name: string;
  password: string;
  rePassword?: string;
}

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

interface ICatalog {
  index: number;
  title?: string;
  type: "image" | "text";
  items: string | StaticImageData;
}

interface IDataBerita {
  id: number;
  title: string;
  created_at: string;
  author: string;
  catalog: Array<ICatalog>;
}
