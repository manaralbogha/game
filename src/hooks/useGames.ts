
import { AxiosRequestConfig } from 'axios';
import { Genre } from './useGenres';
import useData from './useData';
import { GameQuery } from '../App';

export interface Platform{
  id:number;
  name:string;
  slug:string;
}

export interface Game{
  id:number;
  name:String;
  background_image:string;
  platforms:{platform:Platform}[];
  metacritic:number
}




const useGames = (gameQuery:GameQuery ) => 
useData<Game>("/games",
{params:{
  genres: gameQuery.genre?.id,
  platforms:gameQuery.platform?.id,
  ordering:gameQuery.sortOrder,
  search:gameQuery.searchText
 },
},
[gameQuery]);

export default useGames
