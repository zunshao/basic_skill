import Mock from 'mockjs'

const users = []
for (let i = 0; i < 10; i++) {
    users.push(Mock.mock({
        id: Mock.Random.integer(60, 100),
        time: Mock.Random.datetime(),
        desc: Mock.Random.cparagraph()
    }))
}

export {users}