import Creature from "../models/Creature";

export const CREATURE_MUTATIONS = {
    INSERT_CREATURE : 'INSERT_CREATURE'
    , DELETE_CREATURE : 'DELETE_CREATURE'
};

export const state = () => ({
    creatureList : []
});

export const mutations = {
    [CREATURE_MUTATIONS.INSERT_CREATURE] (state, creatureList) {
        for(let creature of creatureList){
            state.creatureList.push(creature);
        }
    }
    , [CREATURE_MUTATIONS.DELETE_CREATURE] (state, uuidList) {
        for(let uuid of uuidList){
            state.creatureList.splice(uuid, 1);
        }
    }
};

export const actions = {
    insert ({commit, dispatch}, {type, uuid}) {
        const creature = new Creature(type, uuid);
        commit(CREATURE_MUTATIONS.INSERT_CREATURE, Array.of(creature));
    },

    delete ({ commit }, uuid ) {
        commit(CREATURE_MUTATIONS.DELETE_CREATURE, uuid instanceof Array ? uuid : Array.of(uuid));
    },

    async save({commit, dispatch}){

    }
};

export const getters = {
    creatureList: (state) => {
        return state.creatureList
    }
};