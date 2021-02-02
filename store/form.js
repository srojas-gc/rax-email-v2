export const state = () => ({
	name: null,
	rate: 0,
	accounts : {
		accountsRax: null,
    	accountsRaxPlus: null,
    	accountsExchange: null,
    	archiving: null
	},
	formId: null
})

export const mutations = {

	setName (state, name) {
		state.name = name;
	},

	setRate (state, rate) {
		state.rate = rate;
	},

	setAccounts (state, accounts) {
		state.accounts.accountsRax = accounts.accountsRax;
		state.accounts.accountsRaxPlus = accounts.accountsRaxPlus;
		state.accounts.accountsExchange = accounts.accountsExchange;
		state.accounts.archiving = accounts.archiving;
	},

	setFormId (state, setid) {
		state.formId = setid;
	}
}

export const getters = {

	getName (state) {
		return state.name;
	},

	getRate (state) {
		return state.rate;
	},

	getAccounts (state) {
		return state.accounts;
	},

	getFormId (state) {
		return state.formId;
	}
}