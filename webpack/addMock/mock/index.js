var axios  = require('axios');
var MockAdapter = require('axios-mock-adapter');
import {users} from "./data/users"

export default {
    init() {
        var mock = new MockAdapter(axios);
        mock.onPost('/users').reply(200, {
            code: 200,
            msg: 'success',
            users
        })
    }
}
