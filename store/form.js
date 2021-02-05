export const state = () => ({
	
	accounts : {
		accountsRax: null,
    	accountsRaxPlus: null,
    	accountsExchange: null,
    	archiving: null
	},

	formId: null,
	rate: 0,
	name: null,
	complete: false,
	createdAt: null,
	priorities: null,
})

export const mutations = {

	setAccounts (state, accounts) {
		state.accounts.accountsRax = accounts.accountsRax;
		state.accounts.accountsRaxPlus = accounts.accountsRaxPlus;
		state.accounts.accountsExchange = accounts.accountsExchange;
		state.accounts.archiving = accounts.archiving;
	},

	setFormId (state, setid) {
		state.formId = setid;
	},

	setRate (state, rate) {
		state.rate = rate;
	},

	setName (state, name) {
		state.name = name;
	},

	setComplete (state, complete) {
		state.complete = complete;
	},

	setCreatedAt (state, createdAt) {
		state.createdAt = createdAt;
	},

	setPriorities (state, priorities) {
		state.priorities = priorities;
	},
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