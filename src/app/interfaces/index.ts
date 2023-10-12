export interface ISubscription {
  title: string,
  image: string
}

export interface IChannels {
  title: string;
  icon: string;
  routerLink: string;
  isActive: boolean

}
export interface ISidebars {
  title: string;
  icon: string;
  routerLink: string
  isActive: boolean

}

export interface IVideo {
  id: number,
  name: string,
  image: string,
  userUpload: IUser,
  views: number

}

export interface IUser {
  id: number,
  image: string,
  name: string,
}

