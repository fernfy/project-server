import Api from '@/services/Api'

export default {
    index(search) {
        return Api().get('School')
    },
    show(SchoolId) {
        return Api().get('School/' + SchoolId)
    },
    post(School) {
        return Api().post('School', School)
    },
    put(School) {
        return Api().put('School/' + School.id, School)
    },
    delete(School) {
        return Api().delete('School/' +School.id, School)
    },
}