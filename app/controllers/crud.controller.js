import {getErrorMessage} from '../tools/tools';


export async function saveAndUpdate(data){
    try{
    return await data.save();
    } catch (e) {
        return getErrorMessage(e);
    }
}

export async function search(query,model){
    try{
    return await model.find(query);
    } catch (e) {
        return getErrorMessage(e);
    }
}

export async function deletes(id,model){
    try{
    return await model.findByIdAndDelete(id);
    } catch (e) {
        return getErrorMessage(e);
    }
}

export async function findOne(id,model){
    try{
        return await model.findOne(id);
        } catch (e) {
            return getErrorMessage(e);
        }
}