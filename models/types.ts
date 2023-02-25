export type userType = {
  id: string,
  login: string,
  password: string,
  name: string,
  surname: string,
};

export type bodyUserType = {
  login: string,
  password: string,
  name: string,
  surname: string,
  projects: string[]
};

export type ProjectType ={
  id: number,
  name: string,
  key: string,
  lead: string,
  type: string,
  checked: boolean,
  columns: ProjectColumnsType[]|string[],
};

export type bodyProjectType= {
  id: number,
  name: string,
  key: string,
  lead: string,
  type: string,
  checked: boolean,
  columns: ProjectColumnsType[]|string[],
};

export type ProjectColumnsType ={
  title: string,
  id: number,
  cards: ProjectCardType[]|string[]
};

export type bodyProjectColumnsType ={
  id: number,
  title: string,
  cards: ProjectCardType[]|string[]
};

export type ProjectCardType= {
  id: number,
  text: string
}

export type bodyProjectCardType= {
  id: number,
  text: string
}


