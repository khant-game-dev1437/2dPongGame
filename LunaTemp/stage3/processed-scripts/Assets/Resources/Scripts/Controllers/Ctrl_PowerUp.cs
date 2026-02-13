using UnityEngine;

public class Ctrl_PowerUp : MonoBehaviour
{
    [SerializeField] private SpriteRenderer _sr;
    [SerializeField] private E_PowerUpType _powerUpType;
    [SerializeField] private Ctrl_GamePlay _gameControl;

    public void Init(Ctrl_GamePlay gamePlay)
    {
        _gameControl = gamePlay;
        transform.localScale = new Vector3(0.125f, 0.125f, 1f);
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        Ctrl_Paddle paddle = collision.gameObject.GetComponent<Ctrl_Paddle>();
        if (paddle != null)
        {
            _gameControl.PowerUpTrigger(_powerUpType);
        }
        Destroy(this.gameObject);
    }
}
