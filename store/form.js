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

	getFormId (state) {
		return state.formId;
	},

	getRate (state) {
		return state.rate;
	},

	getName (state) {
		return state.name;
	},

	getComplete (state) {
		return state.complete;
	},

	getCreatedAt (state) {
		return state.createdAt;
	},

	getAccounts (state) {
		return state.accounts;
	},

	getPriorities (state) {
		return state.priorities;
	},	
}