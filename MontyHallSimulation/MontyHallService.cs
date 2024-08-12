using System;

namespace MontyHallSimulation.Services
{
    public class MontyHallService
    {
        public MontyHallResults simulate(int simulations, bool switchDoor)
        {
            int Wins = 0;
            int Loses = 0;
            Random random = new Random();

            for (int i = 0; i < simulations; i++)
            {
                int carDoor = random.Next(1, 4);
                int chosenDoor = random.Next(1, 4);

                int revealedDoor = 0;
                do
                {
                    revealedDoor = random.Next(1, 4);
                } while (revealedDoor == chosenDoor);

                if (revealedDoor == carDoor)
                {
                    Loses++;
                }
                else
                {
                    if (switchDoor)
                    {
                        int newchosenDoor = 0;
                        do
                        {
                            newchosenDoor = random.Next(1, 4);
                        } while (revealedDoor == newchosenDoor && newchosenDoor == chosenDoor);
                        if (newchosenDoor == carDoor){
                            Wins++;
                        }
                        else{
                            Loses++;
                        }
                    }
                    else
                    {
                        if(carDoor == chosenDoor){
                            Wins++;
                        }
                        else{
                            Loses++;
                        }
                    }
                }
            }
            return new MontyHallResults()
            {
                Wins = Wins,
                Loses = Loses  
            };
        }
    }
}
