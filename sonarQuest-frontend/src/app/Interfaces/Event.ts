import { World } from './World';
import { User } from './User';

export enum EventState {
    NEW_MEMBER = 'NEW_MEMBER',
	CREATED    = 'CREATED',
	SOLVED     = 'SOLVED',
	NEW_ITEM   = 'NEW_ITEM'
}

export interface Event {
    id: number,
    type: string,
    title: string,
    story: string,
    state: EventState,
    image: any,
    world: World,
    timestamp: Date,
    user: User,
    headline: string
}