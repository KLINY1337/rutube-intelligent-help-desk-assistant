import os
from aiogram import Bot, Dispatcher, types
from aiogram.contrib.fsm_storage.memory import MemoryStorage

bot = Bot(
    token=os.getenv("BOT_TOKEN"),
    parse_mode=types.ParseMode.HTML,
)
storage = MemoryStorage()
dp = Dispatcher(bot, storage=storage)
