import { Qoute } from './../pages/data/qoute.interface';
export class QoutesService{
    private favoriteQoutes: Qoute[] = [];

    addQouteToFavorite(qoute: Qoute){
        this.favoriteQoutes.push(qoute);
        console.log(this.favoriteQoutes);
    }

    removeQouteFromFavotite(qoute: Qoute){
        // if parameter's id is equal with the one of favoriteQoutes array'id, return this id
        const postion = this.favoriteQoutes.findIndex((qoutieEl: Qoute) => {
            return qoutieEl.id == qoute.id;
        });
        this.favoriteQoutes.splice(postion, 1);
    }

    // get all of favorite qouties
    getFavoriteQoutes(){
        return this.favoriteQoutes.slice();
    }

    isFavotieQoute(qoute: Qoute){
       const exist =  this.favoriteQoutes.find((qoutieEl: Qoute)=>{
            return qoutieEl.id == qoute.id;
        })

        return exist;
    }
}