import { defineStore } from "pinia"

export const useLoggedInUserStore = defineStore({
	// id is required so that Pinia can connect the store to the devtools
	id: "useSettingStore",
	state: () => {
		return {
			isCollapse: false
		}
	},
	getters: {},
	actions: {}
})
