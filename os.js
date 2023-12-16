const os = require('os')

console.log('operation_system = ', os.platform())

console.log('arch_processor = ', os.arch())

console.log('info_processor = ', os.cpus())

console.log('free_memory = ', os.freemem())

console.log('total_memory = ', os.totalmem())

console.log('home_dir = ', os.homedir())

console.log('system_uptime = ', os.uptime())
