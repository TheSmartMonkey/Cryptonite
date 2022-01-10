import schedule
import os

job = os.system("curl http://localhost:3001/backup")

schedule.every().day.at("10:30").do(job)
