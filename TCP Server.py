#TCP Server Example saver


import socket


serversocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
#IPconfig
host = socket.gethostname()
port = #Port Number

serversocket.bind((host,port))

serversocket.listen(3)

while True:
    clientsocket, address = serversocket.accept()

    print("received connection from" % str(address))

    message = 'Thank you for connectiong to the server' +"\r\n"
    clientsocket.send(message.encode('ascii'))
 
    clientsocket.close()
  
