import os
from datetime import datetime

today = datetime.today().strftime('%Y-%m-%d-%H:%M:%S')

os.system(f"mysqldump -u root -p cryptonite > ../backups/database/backup-{today}.sql")
