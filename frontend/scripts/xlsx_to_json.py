# 使い方---------------------------------------------------
# エクセルファイルをこのファイルと同じディレクトリにペースト
# コード内のExcelファイル名、シート名、JSONファイル名を変更
# ターミナルでこのファイルのあるディレクトリに移動し、"python xlsx_to_json.py"を実行
# ---------------------------------------------------------

import pandas as pd
import json

# Excelファイル読み込み
df = pd.read_excel("chumon.xlsx", sheet_name="Sheet1", header=None)

json_list = []
for _, row in df.iterrows():
    record = {
        "ja": str(row[0]),
        "en": str(row[1])
    }
    json_list.append(record)

# JSONファイル出力
with open("chumon.json", "w", encoding="utf-8") as f:
    json.dump(json_list, f, ensure_ascii=False, indent=2)

print("JSON変換完了")
