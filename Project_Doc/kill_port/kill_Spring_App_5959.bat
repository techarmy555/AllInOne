for /f "tokens=5" %%a in ('netstat -aon ^| find ":5959" ^| find "LISTENING"') do taskkill /f /pid %%a