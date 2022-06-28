import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.image import MIMEImage

def email_to_send(to_address,text_to_send,subject_of_mail,img=None):
    from_addr='parag.negi005@gmail.com'
    to_addr=to_address
    

    username = 'parag.negi005@gmail.com'
    password = 'hzblvvwvkioifajj'
    
    msg = MIMEMultipart()

    msg['From'] = 'parag.negi005@gmail.com'
    msg['To'] = to_address
    msg['Subject'] = subject_of_mail
    html = "<html><head></head><body>"+text_to_send+"</body></html>"
    msg.attach(MIMEText(html, 'html'))

    if img!=None:
        fp = open(img, 'rb')
        msgImage = MIMEImage(fp.read())
        fp.close()
        msgImage.add_header('Content-ID', '<image1>')
        msg.attach(msgImage)
    
    
    server = smtplib.SMTP('smtp.gmail.com:587')
    server.ehlo()
    server.starttls()
    server.ehlo()
    server.login(username,password)
    server.sendmail(from_addr,to_addr,msg.as_string())
    server.quit()