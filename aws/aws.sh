# 設定
aws configure

ls ~/.aws/config
ls ~/.aws/credentials

# ec2
aws ec2 describe-instances

# インスタンスのIDとタグを出力 -> 接続 -> 停止
aws ec2 describe-instances | jq '.Reservations[].Instances[] | {InstanceId,Tags}'
_IID="i-09f8c85c76da45a80"
aws ec2 start-instances --instance-ids ${_IID}
_DNS=`cat out.json | jq -r '.Reservations[].Instances[] | if .InstanceId == "'$_IID'" then .PublicDnsName else "" end'`
ssh -i ~/.ssh/keypair1.pem ubuntu@${_DNS}
aws ec2 stop-instances --instance-ids ${_IID}
