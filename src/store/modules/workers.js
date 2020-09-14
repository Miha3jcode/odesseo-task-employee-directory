export default {
	state: {
		lastId: 0,
		workers: [{ name: 'Юрий Казанок', email: 'kazan@lala.com', phone: '+380631112233', position: 'Директор', id: -1 },
		{ name: 'Юлия Бажанова', email: 'bb333@lala.com', phone: '0631112233', position: 'Санитар', id: -2 }],
	},
	mutations: {
		createWorker(state, { email, name, position, phone }) {
			console.log(email, name, position, phone);
			state.workers.push({ email, name, position, phone, id: state.lastId++ });
		},
		updateWorker(state, { id, email, name, position, phone }) {
			let worker = state.workers.find((w) => w.id === id);
			worker.email = email;
			worker.name = name;
			worker.position = position;
			worker.phone = phone;
		},
		deleteWorker(state, id) {
			state.workers = state.workers.filter((w) => w.id !== id);
		}
	},
	getters: {
		getAllWorkers(state) {
			return state.workers;
		},
		getWorkerById: (state, getters) => id => {
			return getters.getAllWorkers.find((w) => w.id === id);
		},
	},
}