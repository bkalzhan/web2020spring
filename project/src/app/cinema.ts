import { Day } from './day'
export interface Cinema {
    id: number,
    name: string,
    city_id: number,
    day: Day[]
}