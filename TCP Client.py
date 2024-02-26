#This is a example python TCP Client saver

import socket

clientsocket = socket.socket(socket.AF_INET,socket.SOCK_STREAM)

host = 'IP'
host = socket.gethostname()

port = 

clientsocket.connect(('IP', port)) #or host for Ip String

message = clientsocket.recv(1024)

clientsocket.close()

print(message.decode('ascii'))
