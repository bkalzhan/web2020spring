export class Film{
    id: number;
    title : string;
    rating : number;
    description : string;
    country : string;
    year : number;
    genre : string;
    imgUrl : string
}

export class Session{
    id: number;
    time: string;
    price: string;
    film_id: number
}

export class Hall{
    id: number;
    place: number;
    brought: boolean;
    session_id: number
}

export class LoginResponse{
    token: string;
}